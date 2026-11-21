import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLogic } from './load-logic.mjs';
const L = loadLogic(new URL('../index.html', import.meta.url).pathname);

const rec = (o = {}) => ({ id: 'r1', equipmentId: 'e1', date: '2026-11-02', kind: 'inspection', title: '月次点検',
  cost: 3000, vendor: '', meterValue: null, meterUnit: '', nextDue: '2026-12-02', note: '', photoIds: [],
  createdAt: '2026-11-02T01:00:00.000Z', updatedAt: '2026-11-02T01:00:00.000Z', ...o });

test('toDateStr はローカルの日付', () => {
  assert.equal(L.toDateStr(new Date(2026, 10, 21, 0, 5)), '2026-11-21');
  assert.equal(L.toDateStr(new Date(2026, 10, 21, 23, 55)), '2026-11-21');
});
test('addMonths は月末に丸める', () => {
  assert.equal(L.addMonths('2026-01-31', 1), '2026-02-28');
  assert.equal(L.addMonths('2024-02-29', 12), '2025-02-28');
  assert.equal(L.addMonths('2026-08-31', 6), '2027-02-28');
  assert.equal(L.addMonths('2026-11-02', 3), '2027-02-02');
});
test('diffDays', () => {
  assert.equal(L.diffDays('2026-11-21', '2026-12-02'), 11);
  assert.equal(L.diffDays('2026-11-21', '2026-11-20'), -1);
  assert.equal(L.diffDays('2026-03-07', '2026-03-09'), 2);
});
test('dueStatus の境界', () => {
  assert.equal(L.dueStatus('2026-11-20', '2026-11-21', 30), 'overdue');
  assert.equal(L.dueStatus('2026-11-21', '2026-11-21', 30), 'soon');
  assert.equal(L.dueStatus('2026-12-21', '2026-11-21', 30), 'soon');
  assert.equal(L.dueStatus('2026-12-22', '2026-11-21', 30), 'later');
});
test('activeDues は区分ごとの最新の記録だけを見る', () => {
  const rs = [
    rec({ id: 'a', date: '2026-05-01', kind: 'inspection', nextDue: '2026-11-01' }),
    rec({ id: 'b', date: '2026-11-02', kind: 'inspection', nextDue: '2026-12-02' }),
    rec({ id: 'c', date: '2026-10-15', kind: 'replacement', nextDue: null }),
    rec({ id: 'd', date: '2026-09-01', kind: 'replacement', nextDue: '2027-09-01' }),
    rec({ id: 'e', equipmentId: 'e2', date: '2026-01-01', kind: 'inspection', nextDue: '2026-07-01' }),
  ];
  assert.deepEqual(L.activeDues(rs).map((d) => d.recordId).sort(), ['b', 'e']);
});
test('同じ日の記録は createdAt が新しいほう', () => {
  const rs = [
    rec({ id: 'a', date: '2026-11-02', createdAt: '2026-11-02T01:00:00.000Z', nextDue: '2026-12-02' }),
    rec({ id: 'b', date: '2026-11-02', createdAt: '2026-11-02T05:00:00.000Z', nextDue: null }),
  ];
  assert.deepEqual(L.activeDues(rs), []);
});
test('listDues と equipmentBadge', () => {
  const es = [{ id: 'e1', name: 'B 車' }, { id: 'e2', name: 'A 機' }];
  const rs = [
    rec({ id: 'b', date: '2026-11-02', nextDue: '2026-12-02' }),
    rec({ id: 'd', date: '2026-09-01', kind: 'replacement', nextDue: '2027-09-01' }),
    rec({ id: 'e', equipmentId: 'e2', date: '2026-01-01', nextDue: '2026-07-01' }),
    rec({ id: 'g', equipmentId: 'gone', date: '2026-01-01', nextDue: '2026-07-01' }),
  ];
  const dues = L.listDues(rs, es, '2026-11-21', 30);
  assert.deepEqual(dues.map((d) => [d.recordId, d.status, d.days, d.equipmentName]),
    [['e', 'overdue', -143, 'A 機'], ['b', 'soon', 11, 'B 車'], ['d', 'later', 284, 'B 車']]);
  assert.equal(L.equipmentBadge('e1', dues).recordId, 'b');
  assert.equal(L.equipmentBadge('e2', dues).status, 'overdue');
  assert.equal(L.equipmentBadge('e3', dues), null);
});
test('cascadeDelete', () => {
  const es = [{ id: 'e1', photoIds: ['p1'] }, { id: 'e2', photoIds: ['p9'] }];
  const rs = [rec({ id: 'a', photoIds: ['p2', 'p3'] }), rec({ id: 'b', equipmentId: 'e2', photoIds: ['p8'] })];
  assert.deepEqual(L.cascadeDelete('e1', es, rs), { recordIds: ['a'], photoIds: ['p1', 'p2', 'p3'] });
});
