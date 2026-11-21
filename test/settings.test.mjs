import test from 'node:test';
import assert from 'node:assert/strict';
import { loadLogic } from './load-logic.mjs';
const L = loadLogic(new URL('../index.html', import.meta.url).pathname);

test('mergeSettings は不正な値を捨てる', () => {
  const s = L.mergeSettings(L.DEFAULT_SETTINGS, { theme: 'pink', zoom: 137, dueSoonDays: 0, currency: 'ABCDE', lang: 'en' });
  assert.deepEqual(s, { theme: 'auto', zoom: 140, lang: 'en', dueSoonDays: 30, currency: '¥' });
});
test('zoom は 50〜200 に収める', () => {
  assert.equal(L.mergeSettings(L.DEFAULT_SETTINGS, { zoom: 10 }).zoom, 50);
  assert.equal(L.mergeSettings(L.DEFAULT_SETTINGS, { zoom: 999 }).zoom, 200);
});
test('dueSoonDays は 1〜180 の整数だけ', () => {
  assert.equal(L.mergeSettings(L.DEFAULT_SETTINGS, { dueSoonDays: 180 }).dueSoonDays, 180);
  assert.equal(L.mergeSettings(L.DEFAULT_SETTINGS, { dueSoonDays: 181 }).dueSoonDays, 30);
  assert.equal(L.mergeSettings(L.DEFAULT_SETTINGS, { dueSoonDays: 7.5 }).dueSoonDays, 30);
});
test('loadStored は壊れた値で既定に戻り、言語はブラウザから決める', () => {
  assert.equal(L.loadStored('{oops', 'ja-JP').lang, 'ja');
  assert.equal(L.loadStored(null, 'fr-FR').lang, 'en');
  assert.equal(L.loadStored(JSON.stringify({ version: 1, settings: { zoom: 120 } }), 'ja').zoom, 120);
  assert.equal(L.loadStored(JSON.stringify({ version: 9, settings: { zoom: 120 } }), 'ja').zoom, 100);
});
test('parseQuery', () => {
  assert.deepEqual(L.parseQuery('?theme=dark&zoom=120&save=1&tab=dues'),
    { settings: { theme: 'dark', zoom: 120 }, save: true, tab: 'dues' });
  assert.deepEqual(L.parseQuery('?tab=nope&x=1'), { settings: {}, save: false, tab: null });
});
test('t は置換し、無いキーはキー名を返す', () => {
  assert.equal(L.t('ja', 'no_such_key'), 'no_such_key');
  assert.equal(L.t('en', 'status_counts', { equipment: 4, records: 15 }), 'Equipment 4 / Records 15');
});
test('日英のキーがそろっている', () => {
  assert.deepEqual(Object.keys(L.I18N.ja).sort(), Object.keys(L.I18N.en).sort());
});
test('patchSettings は保存する値だけを変え、変えたキーの URL 指定を外す', () => {
  const stored = { ...L.DEFAULT_SETTINGS };
  const overrides = { zoom: 150, lang: 'en' };
  const r = L.patchSettings(stored, overrides, { theme: 'dark' });
  assert.deepEqual(r.stored, { ...L.DEFAULT_SETTINGS, theme: 'dark' });
  assert.deepEqual(r.overrides, { zoom: 150, lang: 'en' });
  assert.deepEqual(r.settings, { ...L.DEFAULT_SETTINGS, theme: 'dark', zoom: 150, lang: 'en' });
  assert.deepEqual(r.rejected, []);
  const r2 = L.patchSettings(r.stored, r.overrides, { zoom: '160' });
  assert.equal(r2.stored.zoom, 160);
  assert.deepEqual(r2.overrides, { lang: 'en' });
  assert.equal(r2.settings.zoom, 160);
  assert.equal(stored.theme, 'auto');
});
test('patchSettings は不正な値を rejected に返し、何も変えない', () => {
  const stored = { ...L.DEFAULT_SETTINGS };
  const r = L.patchSettings(stored, { dueSoonDays: 14 }, { dueSoonDays: '0' });
  assert.deepEqual(r.rejected, ['dueSoonDays']);
  assert.deepEqual(r.stored, stored);
  assert.deepEqual(r.overrides, { dueSoonDays: 14 });
  assert.equal(r.settings.dueSoonDays, 14);
  assert.deepEqual(L.patchSettings(stored, {}, { dueSoonDays: '200' }).rejected, ['dueSoonDays']);
  assert.deepEqual(L.patchSettings(stored, {}, { toString: 'x' }).rejected, ['toString']);
});
test('t は 1 回で置換する(値の中の {キー} は置き換えない)', () => {
  assert.equal(L.t('ja', 'confirm_delete_equipment', { name: '{records}', records: 3 }),
    '「{records}」を削除しますか?\nこの機器の記録 3 件と写真もすべて消えます。');
  assert.equal(L.t('en', 'status_counts', { equipment: '{records}', records: 2 }), 'Equipment {records} / Records 2');
  assert.equal(L.t('en', 'status_counts', { equipment: 1 }), 'Equipment 1 / Records {records}');
});
