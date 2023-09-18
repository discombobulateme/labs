/*
Lab 14.1 - Identifying OS and Exiting
use console.log to output the operating system identifier
Ensure the process exits with a non-zero exit code
Run node test.js to verify whether the task was successfully completed,
if it was node test.js will output passed!
*/

'use strict';
const os = require('os');

console.log(os.platform());
console.log(os.type());

// Exit the process with a non-zero exit code (1)
process.exit(1);


