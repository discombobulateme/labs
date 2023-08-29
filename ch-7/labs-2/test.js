/*
// original exercise
const labs1Path = require.resolve('../labs-1');
const assert = require('assert');
let logged = false;
const { log } = console;
console.log = (out) => {
  logged = true;
  assert(+out === 42, 'correct value logged');
};

require('.');
assert(labs1Path in require.cache, 'module from labs-1 was correctly loaded');
assert(logged, 'value was sent to console.log');
log('passed!');
*/

import { resolve } from 'import-meta-resolve';
import assert from 'assert';

(async () => {
  const addModulePath = await resolve('../labs-1/index.js', import.meta.url);

  const { add } = await import(addModulePath);
  const { sum } = await import('./index.js');

  assert.strictEqual(sum(), 42, 'sum function works correctly');

  console.log('passed!');
})();
