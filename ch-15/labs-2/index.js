// Lab 15.2 - STDIO Redirection

/*
Complete the exercise function so that there turned child process:
- Has no ability to read STDIN.
- Redirects its STDOUT to the parent process 'STDOUT.
- Exposes STDERR as a readable stream.

To verify run node test.js process shoulf output: passed!.
*/

'use strict'

const { spawn } = require('child_process')

/*
function exercise (command, args) {
  return spawn(command, args)
}
*/

function exercise(command, args) {
  // Create a child process with the specified command and arguments
  const child = spawn(command, args, {
    stdio: ['ignore', process.stdout, 'pipe'], // Configure stdio as needed
  });

  // Return the child process
  return child;
}

module.exports = exercise
