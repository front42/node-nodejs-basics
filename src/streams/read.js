import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToReadFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  let readableStream = fs.createReadStream(pathToReadFile);
  readableStream.pipe(stdout);
};

await read();
