import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLogic } from './load-logic.mjs';
const L = loadLogic(new URL('../index.html', import.meta.url).pathname);

const rec = (o = {}) => ({ id: 'r1', equipmentId: 'e1', date: '2026-11-02', kind: 'inspection', title: '月次点検',
  cost: 3000, vendor: '自社', meterValue: 1520, meterUnit: 'h', nextDue: '2026-12-02', note: 'メモ', photoIds: ['p1'],
  createdAt: '2026-11-02T01:00:00.000Z', updatedAt: '2026-11-02T01:00:00.000Z', ...o });

test('duplicatePreset は内容を引き継ぎ、実施日を今日にし、計器の値と写真は引き継がない', () => {
  const p = L.duplicatePreset(rec(), '2026-12-05');
  assert.deepEqual(p, { equipmentId: 'e1', kind: 'inspection', title: '月次点検', cost: 3000, vendor: '自社',
    meterValue: null, meterUnit: 'h', note: 'メモ', date: '2026-12-05', nextDue: '2027-01-05' });
});

test('duplicatePreset は次回予定日までの間隔を保つ(月単位ならその月数、そうでなければ日数)', () => {
  assert.equal(L.duplicatePreset(rec({ date: '2026-01-31', nextDue: '2026-02-28' }), '2026-03-31').nextDue, '2026-04-30');
  assert.equal(L.duplicatePreset(rec({ date: '2026-11-02', nextDue: '2027-11-02' }), '2026-12-05').nextDue, '2027-12-05');
  assert.equal(L.duplicatePreset(rec({ date: '2026-11-02', nextDue: '2026-11-12' }), '2026-12-05').nextDue, '2026-12-15');
  assert.equal(L.duplicatePreset(rec({ date: '2026-11-02', nextDue: '2026-11-02' }), '2026-12-05').nextDue, '2026-12-05');
});

test('duplicatePreset は次回予定日が無い・実施日より前なら、次回予定日を空にする', () => {
  assert.equal(L.duplicatePreset(rec({ nextDue: null }), '2026-12-05').nextDue, null);
  assert.equal(L.duplicatePreset(rec({ nextDue: '2026-10-01' }), '2026-12-05').nextDue, null);
});

test('capPhotos は上限までに切り、捨てた枚数を返す', () => {
  assert.deepEqual(L.capPhotos(8, ['a', 'b', 'c']), { kept: ['a', 'b'], dropped: 1 });
  assert.deepEqual(L.capPhotos(10, ['a']), { kept: [], dropped: 1 });
  assert.deepEqual(L.capPhotos(12, ['a']), { kept: [], dropped: 1 });
  assert.deepEqual(L.capPhotos(0, ['a']), { kept: ['a'], dropped: 0 });
});
