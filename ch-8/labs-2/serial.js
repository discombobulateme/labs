/*
'use strict'
const { promisify } = require('util')

const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

*/

'use strict';

const { promisify } = require('util');

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const setTimeoutPromise = promisify(setTimeout);

const opA = async () => {
  await setTimeoutPromise(500);
  return 'A';
};

const opB = async () => {
  await setTimeoutPromise(250);
  return 'B';
};

const opC = async () => {
  await setTimeoutPromise(125);
  return 'C';
};

(async () => {
  const results = [];

  const tasks = [opA, opB, opC];
  for (const task of tasks) {
    const result = await task();
    results.push(result);
    print(null, result);
  }
})();
