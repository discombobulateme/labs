/*
The code in child.js expects that there will be only one
environment variable named MY_ENV_VAR to have the value 'isset'.
If this is not the case the assert.strictEqual method will
throw an assertion error. Incertain scenarios some extra
environment variables are added to child processes, these are
stripped so that there should only ever be one environment
variable set in child.js, which is the MY_ENV_VAR environment
variable.
*/

'use strict'
const assert = require('assert')
const clean = (env) => Object.fromEntries(
  Object.entries(env).filter(([k]) => !/^(_.*|pwd|shlvl)/i.test(k))
)
const env = clean(process.env)

assert.strictEqual(env.MY_ENV_VAR, 'is set')
assert.strictEqual(
  Object.keys(env).length,
  1,
  'child process should have only one env var'
)
console.log('passed!')
