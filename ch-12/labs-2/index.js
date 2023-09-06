
// Lab 12.2 - Create a Transform Stream

/*
Replace the line that states const transform = newPassThrough() so that
transform is assigned to a transform stream that uppercases any incoming chunks.
If successfully implemented the process will output: passed!
*/

'use strict'
const { Readable, Writable, Transform, PassThrough, pipeline } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  const writable = new Writable({
    write(chunk, enc, cb) {
      sink.push(chunk.toString())
      cb()
    }
  })
  writable.sink = sink
  return writable
}
const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()

// TODO: replace the pass through stream with a transform stream that uppercases incoming characters
// const transform = new PassThrough()

// Create a Transform stream that uppercases incoming characters
const transform = new Transform({
  transform(chunk, enc, cb) {
    const uppercasedChunk = chunk.toString().toUpperCase();
    cb(null, uppercasedChunk); // indicate that the transformation is complete
  }
})


pipeline(readable, transform, writable, (err) => {
  assert.ifError(err)
  assert.deepStrictEqual(writable.sink, ['A', 'B', 'C'])
  console.log('passed!')
})
