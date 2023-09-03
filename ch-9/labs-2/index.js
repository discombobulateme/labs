/* Without removing any of the existing code, and without using a try/catch
block add some code which stops the process from crashing.
When implemented correctly the process should output passed!
*/

'use strict';
const { EventEmitter } = require('events');
const { nextTick } = require('process');

process.nextTick(console.log, 'passed!');

const ee = new EventEmitter();

//added this line, as "To add a listener to an event emitter the addListener method or it's alias on method is used"
ee.on('error', () => {});

ee.emit('error', Error('timeout'));
