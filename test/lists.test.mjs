import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLogic } from './load-logic.mjs';
const L = loadLogic(new URL('../index.html', import.meta.url).pathname);

const rec = (o = {}) => ({ id: 'r1', equipmentId: 'e1', date: '2026-11-02', kind: 'inspection', title: '月次点検',
  cost: 3000, vendor: '', meterValue: null, meterUnit: '', nextDue: '2026-12-02', note: '', photoIds: [],
  createdAt: '2026-11-02T01:00:00.000Z', updatedAt: '2026-11-02T01:00:00.000Z', ...o });

const es = [
  { id: 'e1', name: '社用車', category: 'vehicle', maker: 'ノルテ自動車', model: 'NR-30H', serial: '', note: '', specs: [{ label: 'タイヤ', value: '195/65R15' }], updatedAt: '2026-11-01T00:00:00.000Z' },
  { id: 'e2', name: 'コンプレッサー', category: 'machine', maker: 'Kazemaru', model: 'KM-075', serial: 'SN-77', note: '倉庫', specs: [], updatedAt: '2026-11-10T00:00:00.000Z' },
  { id: 'e3', name: 'エアコン', category: 'facility', maker: '', model: '', serial: '', note: '', specs: [], updatedAt: '2026-10-01T00:00:00.000Z' },
];
test('filterEquipment', () => {
  assert.deepEqual(L.filterEquipment(es, { q: ' kazemaru ', category: '' }).map((e) => e.id), ['e2']);
  assert.deepEqual(L.filterEquipment(es, { q: '195/65', category: '' }).map((e) => e.id), ['e1']);
  assert.deepEqual(L.filterEquipment(es, { q: '', category: 'facility' }).map((e) => e.id), ['e3']);
  assert.deepEqual(L.filterEquipment(es, { q: 'sn-77', category: 'vehicle' }), []);
  assert.equal(L.filterEquipment(es, { q: '', category: '' }).length, 3);
});
test('sortEquipment', () => {
  const dues = [{ equipmentId: 'e3', nextDue: '2026-11-01' }, { equipmentId: 'e1', nextDue: '2026-12-02' }, { equipmentId: 'e1', nextDue: '2027-01-01' }];
  assert.deepEqual(L.sortEquipment(es, 'due', dues).map((e) => e.id), ['e3', 'e1', 'e2']);
  assert.deepEqual(L.sortEquipment(es, 'updated', dues).map((e) => e.id), ['e2', 'e1', 'e3']);
  assert.equal(L.sortEquipment(es, 'name', dues).length, 3);
  assert.equal(es[0].id, 'e1');
});
test('filterRecords と groupByMonth', () => {
  const rs = [
    rec({ id: 'a', date: '2026-11-02', cost: 3000, title: '月次点検' }),
    rec({ id: 'b', date: '2026-11-20', cost: null, title: 'タイヤ交換', kind: 'replacement', vendor: '山田モータース' }),
    rec({ id: 'c', date: '2026-10-15', cost: 12000, title: 'バッテリー交換', kind: 'replacement', equipmentId: 'e2' }),
  ];
  assert.deepEqual(L.filterRecords(rs, { q: '山田', kind: '', equipmentId: '' }).map((r) => r.id), ['b']);
  assert.deepEqual(L.filterRecords(rs, { q: '', kind: 'replacement', equipmentId: 'e2' }).map((r) => r.id), ['c']);
  assert.deepEqual(L.groupByMonth(rs).map((g) => [g.month, g.total, g.records.map((r) => r.id)]),
    [['2026-11', 3000, ['b', 'a']], ['2026-10', 12000, ['c']]]);
});
test('groupByMonth は同日を createdAt の降順に並べる', () => {
  const rs = [rec({ id: 'x', createdAt: '2026-11-02T01:00:00.000Z' }), rec({ id: 'y', createdAt: '2026-11-02T05:00:00.000Z' })];
  assert.deepEqual(L.groupByMonth(rs)[0].records.map((r) => r.id), ['y', 'x']);
});
