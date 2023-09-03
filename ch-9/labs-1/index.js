/** Register the listener function with the ee event emitter in such a way that
 * the listener function is only called a single time.
 * If implemented correctly, the program should print out passed!:
 */

'use strict';
const assert = require('assert');
const { EventEmitter } = require('events');

const ee = new EventEmitter();
let count = 0;
setInterval(() => {
  ee.emit('tick'); /* tick is the given name of the event */
}, 100);

function listener() {
  count++;
  setTimeout(() => {
    assert.equal(count, 1);
    assert.equal(this, ee);
    console.log('passed!');
  }, 250);
}

ee.once('tick', listener); /* call the event by its given name and call the listener func */
