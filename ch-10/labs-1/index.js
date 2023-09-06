// Lab10.1-Synchronous Error Handling

/* The native URL constructor can be used to parse URLs, it's
been wrapped into a function called parse URL

If URL is passed a unparsable URL string it will throw, so calling
parseURL('foo') will result in an exception

Modify the parseURL function body such that instead of throwing
an error, it returns null when the URL is invalid.
Use the fact that URL will throw when given invalid input to
determine whether or not to return null or a parsed object.

Once implemented, execute the index.js file with node,
if the output says passed! then the exercise was completed successfully
*/

/*
'use strict'
const assert = require('assert')

function parseUrl (str) {
  const parsed = new URL(str)
  return parsed
}

assert.doesNotThrow(() => { parseUrl('invalid-url') })
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'),
  new URL('http://example.com')
)
console.log('passed!')
*/

'use strict';
const assert = require('assert');

function parseUrl(str) {
  try {
    const parsed = new URL(str);
    return parsed;
  } catch (error) {
    return null;
  }
}

assert.doesNotThrow(() => {
  parseUrl('invalid-url');
});
assert.equal(parseUrl('invalid-url'), null);
assert.deepEqual(parseUrl('http://example.com'), new URL('http://example.com'));
console.log('passed!');
