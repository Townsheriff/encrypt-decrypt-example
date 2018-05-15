'use strict';

const fs = require('fs');
const decrypt = require('./decrypt');
const encrypt = require('./encrypt');

const ALGORITHM = 'aes-128-cbc';
const BLOCK_SIZE = 16;
const SECRET_KEY = 'MySecretKey12345';
const IV = '1234567890123456';


const options = {
  algorithm: ALGORITHM,
  blockSize: BLOCK_SIZE,
  secretKey: SECRET_KEY,
  iv: IV,
  inputEncoding: 'binary'
};

module.exports = (inputFile, encryptedOutputFile, decryptedOutputFile) => {
  const dataBuffer = fs.readFileSync(inputFile);

  const encrypted = encrypt(dataBuffer, options);
  const decrypted = decrypt(encrypted, options);

  fs.writeFileSync(encryptedOutputFile, encrypted);
  fs.writeFileSync(decryptedOutputFile, decrypted);
};




