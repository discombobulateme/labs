// Lab12.1-Piping

/*
Use the appropriate method to make sure that all data in the readable stream is
automatically sent to the writable stream.
If successfully implemented the process will output: passed!
*/

'use strict'
const { Readable, Writable } = require('stream')
const assert = require('assert')
// creates and returns a writable stream
const createWritable = () => {
  const sink = []; // store the data that is written to the writable stream
  let piped = false;
  // run a callback function asynchronously
  setImmediate(() => {
    // logic to ensure that the pipe method is used, and it checks if the data written matches the expected result
    assert.strictEqual(piped, true, 'use the pipe method');
    assert.deepStrictEqual(sink, ['a', 'b', 'c']);
  });
  // create the writable stream writable using the Writable class
  const writable = new Writable({
    decodeStrings: false,
    /* method is called for each chunk of data written to the stream.
    It pushes the chunk into the sink array
    and calls the provided callback cb() to signal that the write operation is complete
    */
    write(chunk, enc, cb) {
      sink.push(chunk);
      cb();
    },
    final() {
      console.log('passed!');
    },
  });
  /*
   event listener to the writable stream to listen for the 'pipe' event.
   When the 'pipe' event occurs, it sets piped to true
  */
  writable.once('pipe', () => {
    piped = true;
  });
  return writable;
}
const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()

// TODO - send all data from readable to writable:

/*
Send all data from readable to writable using the pipe method
use the pipe method to direct the data from the readable stream to the writable stream.
This is the crucial step that ensures all data from the readable stream is automatically sent to the writable stream
*/
readable.pipe(writable)
