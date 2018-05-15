'use strict';

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
  inputEncoding: 'utf8'
};

const data = "Hello World";
const encrypted = encrypt(data, options);
const decrypted = decrypt(encrypted, options);

console.log('Encrypted:', encrypted.toString('hex'));
console.log('Decrypted:', decrypted.toString('utf8'));
