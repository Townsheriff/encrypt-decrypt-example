'use strict';

const crypto = require('crypto');

module.exports = (data, {algorithm, secretKey, iv}) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  // disables built in padding
  decipher.setAutoPadding(false);

  const decrypted =
    decipher.update(data, 'binary', 'binary') +
    decipher.final('binary');

  const decryptedBuffer = new Buffer(decrypted, 'binary');
  // gets padding size from end
  const paddingSize = decryptedBuffer[decryptedBuffer.byteLength - 1];
  const bufferSize = decryptedBuffer.byteLength - paddingSize;
  // alloc buffer which wont fit padding bytes
  const buffer = Buffer.alloc(bufferSize);
  // fills buffer with decrypted data and throws away padding data
  buffer.fill(decryptedBuffer, 0, bufferSize);

  return buffer;
};
