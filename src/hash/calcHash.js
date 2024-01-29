import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToReadFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  let readableStream = fs.createReadStream(pathToReadFile);
  readableStream.on('data', chunk => hash.update(chunk));
  readableStream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
