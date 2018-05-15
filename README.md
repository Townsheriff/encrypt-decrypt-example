# AES-128-CBC Encrypt - Decrypt without built in padding

Runs encryption and then decryption for file with AES-128-CBC.

File size is limited up to 4GB (in theory, most probably it is smaller), since example is not using stream, but reads data in RAM.

## Tested on

* node - `v9.11.1`

* os - MAC OS High Sierra

## File Usage

Example: `node example-file.js <in> <encrypted> <decrypted>`

Should create 2 additional files - encrypted and decrypted.