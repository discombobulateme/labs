// Lab 15.1 - Set Child Process Environment Variable

/*
Using any child_process method except execFile and execFileSync,
complete the exercise function so that it returns a child process
that executes the child.js file with node. To check the exercise
implementation, run node test.js, if successful the process will
output:passed!
If unsuccessful, various assertion error messages will be output
to help provide hints. One very useful hint up front is: use
process.execPath to reference the node executable instead of
just passing 'node' as string to the child_process method.
The contents of the test.js file is esoteric, and the need to
understand the code is minimal, however the contents of test.js
are shown here for completeness
*/

'use strict'

/*
function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set
  // named MY_ENV_VAR. The MY_ENV_VAR
  // environment variable's value should
  // be the value of the myEnvVar parameter
  // passed to this exercise function
  return require('child_process').spawnSync(process.argv[0], ['child.js'])
}

module.exports = exercise
*/

function exercise(myEnvVar) {
  // Import the child_process module
  const { spawn } = require('child_process');

  // Define the command to run (Node.js) and the arguments (file to execute)
  const command = process.execPath; // Use process.execPath to reference the Node.js executable
  const args = ['child.js'];

  // Define the environment variable(s)
  const env = {
    MY_ENV_VAR: myEnvVar, // Set MY_ENV_VAR to the value of myEnvVar
  };

  // Create and return the child process
  return spawn(command, args, { env });
}

module.exports = exercise;
