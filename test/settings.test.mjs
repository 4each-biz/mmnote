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
