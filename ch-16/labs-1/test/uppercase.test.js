const { test } = require('tap');
const uppercase = require('../uppercase');

test('Uppercase function should convert a string to uppercase', (t) => {
  t.plan(1); // We expect one assertion

  const result = uppercase('hello');
  t.equal(result, 'HELLO', 'Should convert "hello" to "HELLO"');
});

test('Uppercase function should throw an error for non-string input', (t) => {
  t.plan(2); // We expect two assertions

  t.throws(() => uppercase(42), /input must be a string/, 'Should throw an error for non-string input');
  t.throws(() => uppercase(null), /input must be a string/, 'Should throw an error for null input');
});
