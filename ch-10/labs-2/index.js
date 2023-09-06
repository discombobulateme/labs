// Lab10.2-AsyncFunction Error Handling

/*
The promise returned from fs/promises readFile may reject
for a variety of reasons, for instance if the specified file
path doesn't exist or the process doesn't have permissions to
access it. In this scenario, we don't care what the reason for
failure is, we just want to propagate a single error instance
from the native Error constructor with the message
'failed to read'.

Modify the body of the read function so that any possible
rejection by the promise returned from the fs/promises readFile
call results in the read function rejecting with a
new Error('failed to read') error.
If implemented correctly, when nodeindex.js is executed the output
should be passed!
*/

/*
'use strict'
const fs = require('fs')
const assert = require('assert')

async function read (file) {
  const content = await fs.promises.readFile(file)
  return content
}


async function check () {
  await assert.rejects(
    read('not-a-valid-filepath'),
    new Error('failed to read')
  )
  assert.deepEqual(
    await read(__filename),
    fs.readFileSync(__filename)
  )
  console.log('passed!')
}

check()
*/

'use strict';
const fs = require('fs');
const assert = require('assert');

async function read(file) {
  try {
    const content = await fs.promises.readFile(file);
    return content;
  } catch (error) {
    throw new Error('failed to read');
  }
}

async function check() {
  await assert.rejects(read('not-a-valid-filepath'), new Error('failed to read'));
  assert.deepEqual(await read(__filename), fs.readFileSync(__filename));
  console.log('passed!');
}

check();

