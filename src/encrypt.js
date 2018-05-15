const crypto = require('crypto');

module.exports = (data, {algorithm, blockSize, iv, secretKey, inputEncoding}) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  // disables built in padding
  cipher.setAutoPadding(false);

  const dataBuffer = Buffer.from(data);

  // determines size of buffer
  const bufferSize = dataBuffer.byteLength % blockSize === 0
    // if data is size of block then alloc one more block
    ? dataBuffer.byteLength + 1
    // if data is not equal to block size then malloc required bytes to reach block
    : dataBuffer.byteLength + blockSize - (dataBuffer.byteLength % blockSize);

  const buffer = Buffer.alloc(bufferSize);
  // determines size of padding bytes
  const paddingSize = bufferSize - dataBuffer.byteLength;

  // fills with actual data
  buffer.fill(dataBuffer, 0);

  // fills with padding data
  buffer.fill(paddingSize, dataBuffer.byteLength);

  const encrypted =
    cipher.update(buffer, inputEncoding, 'binary') +
    cipher.final('binary');

  return new Buffer(encrypted, 'binary');
};
