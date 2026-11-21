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
const meta = (o = {}) => ({ id: 'p1', ownerType: 'equipment', ownerId: 'e1', file: 'photos/p1.jpg', width: 800, height: 600, createdAt: 't', ...o });
const good = () => ({ app: 'mmnote', version: 1, exportedAt: 'x', settings: { zoom: 120 },
  equipment: [eq({ photoIds: ['p1'] })], records: [rec()], photos: [meta()] });

test('exportFileName', () => {
  assert.equal(L.exportFileName(new Date(2026, 10, 21, 9, 5)), 'mmnote-20261121-0905.zip');
});
test('buildExport して validateImport すると元に戻る', () => {
  const out = L.buildExport({ settings: { ...L.DEFAULT_SETTINGS, zoom: 120 }, equipment: [eq({ photoIds: ['p1'] })], records: [rec()],
    photoMetas: [{ id: 'p1', ownerType: 'equipment', ownerId: 'e1', width: 800, height: 600, createdAt: 't' }] }, '2026-11-21T00:00:00.000Z');
  assert.equal(out.app, 'mmnote'); assert.equal(out.version, 1); assert.equal(out.photos[0].file, 'photos/p1.jpg');
  const r = L.validateImport(JSON.parse(JSON.stringify(out)), ['data.json', 'photos/p1.jpg']);
  assert.equal(r.ok, true);
  assert.deepEqual(r.dropped, { equipment: 0, records: 0, photos: 0 });
  assert.equal(r.data.settings.zoom, 120);
  assert.deepEqual(r.data.equipment[0].photoIds, ['p1']);
});
test('形が違えば中止', () => {
  assert.deepEqual(L.validateImport({ ...good(), app: 'other' }, []), { ok: false, error: 'err_import_not_mmnote' });
  assert.deepEqual(L.validateImport({ ...good(), version: 2 }, []), { ok: false, error: 'err_import_version' });
  assert.deepEqual(L.validateImport({ ...good(), equipment: {} }, []), { ok: false, error: 'err_import_shape' });
  assert.deepEqual(L.validateImport(null, []), { ok: false, error: 'err_import_not_mmnote' });
});
test('不正な項目だけ捨てて数える', () => {
  const o = good();
  o.equipment.push(eq({ id: 'e1', name: '重複' }), { id: 'bad' });
  o.records.push(rec({ id: 'r2', equipmentId: 'gone' }), rec({ id: 'r3', photoIds: ['p2', 'p3', 'p4', 'p5'] }));
  o.photos.push(
    meta({ id: 'p2', ownerType: 'record', ownerId: 'r3', file: 'photos/p2.jpg' }),              // ファイルが無い
    meta({ id: 'p3', ownerType: 'record', ownerId: 'r3', file: '../p3.jpg' }),                  // パスが不正
    meta({ id: 'p4', ownerType: 'record', ownerId: 'r3', file: 'photos/p1.jpg' }),              // 別の id を指す
    meta({ id: 'p5', ownerType: 'record', ownerId: 'r3', file: 'photos/p5.jpg' }),              // 正常
    meta({ id: 'p6', ownerType: 'record', ownerId: 'gone', file: 'photos/p6.jpg' }),            // 持ち主が無い
    meta({ id: 'p7', ownerType: 'equipment', ownerId: 'e1', file: 'photos/p7.jpg' }),           // どの photoIds にも無い
  );
  const r = L.validateImport(o, ['data.json', 'photos/p1.jpg', 'photos/p5.jpg', 'photos/p6.jpg', 'photos/p7.jpg', '../p3.jpg']);
  assert.equal(r.ok, true);
  assert.deepEqual(r.dropped, { equipment: 2, records: 1, photos: 5 });
  assert.deepEqual(r.data.photos.map((p) => p.id), ['p1', 'p5']);
  assert.deepEqual(r.data.records.find((x) => x.id === 'r3').photoIds, ['p5']);
});
test('settings が壊れていても既定で通す', () => {
  assert.deepEqual(L.validateImport({ ...good(), settings: 'x' }, ['photos/p1.jpg']).data.settings, L.DEFAULT_SETTINGS);
});
test('supportUrl', () => {
  assert.equal(L.supportUrl('manual'), 'https://support.trusted-host.online/t/mmnote/manual');
  assert.equal(L.supportUrl('error'), 'https://support.trusted-host.online/t/mmnote/error-report');
  assert.equal(L.supportUrl('nope'), null);
  assert.deepEqual(L.SUPPORT.links.map((l) => l.key), ['manual', 'faq', 'releases', 'news', 'contact', 'error', 'terms', 'privacy']);
});
for (const lang of ['ja', 'en']) {
  test(`buildSample(${lang}) は正規化を通り、3 つの状態が出る`, () => {
    let n = 0;
    const s = L.buildSample(lang, '2026-11-21', () => 'id' + (++n));
    assert.equal(s.equipment.length, 4);
    assert.ok(s.records.length >= 14 && s.records.length <= 16);
    for (const e of s.equipment) { assert.deepEqual(L.normalizeEquipment(e), e); assert.deepEqual(L.validateEquipment(e), []); }
    for (const r of s.records) { assert.deepEqual(L.normalizeRecord(r), r); assert.deepEqual(L.validateRecord(r), []); assert.ok(r.date <= '2026-11-21'); }
    const st = new Set(L.listDues(s.records, s.equipment, '2026-11-21', 30).map((d) => d.status));
    assert.deepEqual([...st].sort(), ['later', 'overdue', 'soon']);
    assert.equal(s.photos.length, 4);
    assert.deepEqual(new Set(s.equipment.map((e) => e.category)).size >= 3, true);
  });
}
test('サンプルは今日を変えても 3 つの状態が出る', () => {
  let n = 0;
  const s = L.buildSample('ja', '2028-02-29', () => 'id' + (++n));
  assert.equal(new Set(L.listDues(s.records, s.equipment, '2028-02-29', 30).map((d) => d.status)).size, 3);
});
