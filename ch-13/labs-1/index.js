// Lab 13.1 - Read Directory and Write File
/*
The above code will generate a project folder and add five files to it with
pseudo-randomly generated file names.

Complete the function named exercise so that all the files in the project folder,
as stored in the project constant, are written to the out.txt file as stored
in the out constant.
Only the file names should be stored, not the full file paths, and file names
should be comma separated
*/

'use strict'
const assert = require('assert')
const { join, basename } = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, {recursive: true}) } catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
files.sort()
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')

function exercise () {
  // TODO read the files in the project folder
  const projectFiles = fs.readdirSync(project);
  // Extract only the file names (without full paths)
  const fileNames = projectFiles.map((filePath) => basename(filePath));
  // and write the to the out.txt file
  fs.writeFileSync(out, fileNames.join(','));
}

exercise()
assert.deepStrictEqual(
  fs.readFileSync(out).toString().split(',').map((s) => s.trim()),
  files.map((f) => basename(f))
)
console.log('passed!')
