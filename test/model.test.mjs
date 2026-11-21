import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLogic } from './load-logic.mjs';
const L = loadLogic(new URL('../index.html', import.meta.url).pathname);

const eq = (o = {}) => ({ id: 'e1', name: 'フォークリフト 2号', category: 'machine', maker: 'ノルテ自動車', model: 'HB-15E',
  serial: '', acquiredOn: '2020-04-01', specs: [{ label: '定格荷重', value: '1.5t' }], note: '', photoIds: [],
  createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z', ...o });
const rec = (o = {}) => ({ id: 'r1', equipmentId: 'e1', date: '2026-11-02', kind: 'inspection', title: '月次点検',
  cost: 3000, vendor: '', meterValue: null, meterUnit: '', nextDue: '2026-12-02', note: '', photoIds: [],
  createdAt: '2026-11-02T01:00:00.000Z', updatedAt: '2026-11-02T01:00:00.000Z', ...o });

test('isDate', () => {
  assert.equal(L.isDate('2024-02-29'), true);
  assert.equal(L.isDate('2026-02-29'), false);
  assert.equal(L.isDate('2026-1-5'), false);
  assert.equal(L.isDate(null), false);
});
test('validateEquipment', () => {
  assert.deepEqual(L.validateEquipment(eq()), []);
  assert.deepEqual(L.validateEquipment(eq({ name: '   ' })), ['err_name_required']);
  assert.deepEqual(L.validateEquipment(eq({ name: 'あ'.repeat(61) })), ['err_name_long']);
  assert.deepEqual(L.validateEquipment(eq({ acquiredOn: '2026-13-01' })), ['err_date_invalid']);
  assert.deepEqual(L.validateEquipment(eq({ maker: 'x'.repeat(201) })), ['err_text_long']);
});
test('validateRecord', () => {
  assert.deepEqual(L.validateRecord(rec()), []);
  assert.deepEqual(L.validateRecord(rec({ title: '' })), ['err_title_required']);
  assert.deepEqual(L.validateRecord(rec({ date: '' })), ['err_date_invalid']);
  assert.deepEqual(L.validateRecord(rec({ cost: -1 })), ['err_cost_invalid']);
  assert.deepEqual(L.validateRecord(rec({ cost: 1.5 })), ['err_cost_invalid']);
  assert.deepEqual(L.validateRecord(rec({ meterValue: -3 })), ['err_meter_invalid']);
  assert.deepEqual(L.validateRecord(rec({ nextDue: '2026-11-01' })), ['err_due_before_date']);
  assert.deepEqual(L.validateRecord(rec({ nextDue: '2026-11-02' })), []);
  assert.deepEqual(L.validateRecord(rec({ nextDue: null, cost: null })), []);
});
test('normalizeEquipment は不正を捨て、直せるものは直す', () => {
  assert.equal(L.normalizeEquipment({ id: 'e1' }), null);
  assert.equal(L.normalizeEquipment(eq({ id: 5 })), null);
  const n = L.normalizeEquipment(eq({ name: '  ' + 'あ'.repeat(70), category: 'ufo', acquiredOn: 'x',
    specs: [{ label: '', value: '' }, { label: 'a', value: 1 }, 'bad'], photoIds: ['p1', 2], extra: 1 }));
  assert.equal(n.name.length, 60);
  assert.equal(n.category, 'other');
  assert.equal(n.acquiredOn, null);
  assert.deepEqual(n.specs, [{ label: 'a', value: '1' }]);
  assert.deepEqual(n.photoIds, ['p1']);
  assert.equal('extra' in n, false);
});
test('文字列はそのまま保つ(タグを加工しない)', () => {
  assert.equal(L.normalizeEquipment(eq({ name: '<img src=x onerror=alert(1)>' })).name, '<img src=x onerror=alert(1)>');
});
test('normalizeRecord', () => {
  assert.equal(L.normalizeRecord(rec({ equipmentId: '' })), null);
  assert.equal(L.normalizeRecord(rec({ date: '2026-02-30' })), null);
  const n = L.normalizeRecord(rec({ kind: 'x', cost: '12', meterValue: 'abc', nextDue: 'x', meterUnit: 'kilometers!' }));
  assert.equal(n.kind, 'other'); assert.equal(n.cost, null); assert.equal(n.meterValue, null);
  assert.equal(n.nextDue, null); assert.equal(n.meterUnit, 'kilomete');
});
test('normalizePhotoMeta', () => {
  assert.equal(L.normalizePhotoMeta({ id: 'p1', ownerType: 'x', ownerId: 'e1' }), null);
  assert.deepEqual(L.normalizePhotoMeta({ id: 'p1', ownerType: 'record', ownerId: 'r1', width: 800, height: 600, createdAt: 't', blob: 1 }),
    { id: 'p1', ownerType: 'record', ownerId: 'r1', width: 800, height: 600, createdAt: 't' });
});
test('createdAt / updatedAt が無いときは空文字(時計を読まない)', () => {
  const e = L.normalizeEquipment(eq({ createdAt: undefined, updatedAt: 5 }));
  assert.equal(e.createdAt, ''); assert.equal(e.updatedAt, '');
  const r = L.normalizeRecord(rec({ createdAt: null, updatedAt: undefined }));
  assert.equal(r.createdAt, ''); assert.equal(r.updatedAt, '');
  assert.equal(L.normalizePhotoMeta({ id: 'p1', ownerType: 'equipment', ownerId: 'e1' }).createdAt, '');
});
test('fitSize', () => {
  assert.deepEqual(L.fitSize(4000, 3000, 1600), { width: 1600, height: 1200 });
  assert.deepEqual(L.fitSize(3000, 4000, 1600), { width: 1200, height: 1600 });
  assert.deepEqual(L.fitSize(800, 600, 1600), { width: 800, height: 600 });
  assert.deepEqual(L.fitSize(10000, 3, 1600), { width: 1600, height: 1 });
  assert.equal(L.fitSize(0, 600, 1600), null);
  assert.equal(L.fitSize(NaN, 600, 1600), null);
});
test('validateEquipment の上限(仕様 30 行)', () => {
  const specs = (n) => Array.from({ length: n }, (_, i) => ({ label: `l${i}`, value: 'v' }));
  assert.deepEqual(L.validateEquipment(eq({ specs: specs(30) })), []);
  assert.deepEqual(L.validateEquipment(eq({ specs: specs(31) })), ['err_text_long']);
  assert.equal(L.normalizeEquipment(eq({ specs: specs(40) })).specs.length, 30);
});
test('photoIds は 10 件まで', () => {
  const ids = Array.from({ length: 12 }, (_, i) => `p${i}`);
  assert.deepEqual(L.normalizeEquipment(eq({ photoIds: ids })).photoIds, ids.slice(0, 10));
  assert.deepEqual(L.normalizeRecord(rec({ photoIds: ids })).photoIds, ids.slice(0, 10));
});
test('validateRecord の長さと計器の値', () => {
  assert.deepEqual(L.validateRecord(rec({ title: 'あ'.repeat(80) })), []);
  assert.deepEqual(L.validateRecord(rec({ title: 'あ'.repeat(81) })), ['err_title_long']);
  assert.deepEqual(L.validateRecord(rec({ vendor: 'x'.repeat(201) })), ['err_text_long']);
  assert.deepEqual(L.validateRecord(rec({ meterUnit: 'x'.repeat(9) })), ['err_text_long']);
  assert.deepEqual(L.validateRecord(rec({ meterValue: NaN })), ['err_meter_invalid']);
  assert.deepEqual(L.validateRecord(rec({ meterValue: '12' })), ['err_meter_invalid']);
});
test('parseNumber: 全角と桁区切りのカンマは受け付け、それ以外のカンマは NaN', () => {
  assert.equal(L.parseNumber(''), null);
  assert.equal(L.parseNumber('  '), null);
  assert.equal(L.parseNumber('1,234'), 1234);
  assert.equal(L.parseNumber('12,345,678.5'), 12345678.5);
  assert.equal(L.parseNumber('１２，３４５'), 12345);
  assert.equal(L.parseNumber('0.1234'), 0.1234);
  assert.equal(L.parseNumber('.5'), 0.5);
  assert.ok(Number.isNaN(L.parseNumber('1,5')));
  assert.ok(Number.isNaN(L.parseNumber('12,34')));
  assert.ok(Number.isNaN(L.parseNumber(',123')));
  assert.ok(Number.isNaN(L.parseNumber('abc')));
  assert.equal(L.parseNumber('-3'), -3);
});
