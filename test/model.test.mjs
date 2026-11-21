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
