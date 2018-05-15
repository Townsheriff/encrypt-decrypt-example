'use strict';

const path = require('path');
const run = require('./src/example-file');

if (process.argv.length < 5) {
  console.log('Required input file and output file paths. Example:');
  console.log('node example-file.js <input file> <encrypted file> <decrypted file>');
  process.exit(1);
}

const inputFile = path.resolve(process.argv[2]);
const encryptedOutputFile = path.resolve(process.argv[3]);
const decryptedOutputFile = path.resolve(process.argv[4]);

console.log('input file path:', inputFile);
console.log('encrypted file path:', encryptedOutputFile);
console.log('decrypted file path:', decryptedOutputFile);

let isSameFile = false;
isSameFile = isSameFile || inputFile === encryptedOutputFile;
isSameFile = isSameFile || inputFile === decryptedOutputFile;
isSameFile = isSameFile || encryptedOutputFile === decryptedOutputFile;

if (isSameFile) {
  console.log('Required and/or output files are same!');
  process.exit(2);
}


run(inputFile, encryptedOutputFile, decryptedOutputFile);