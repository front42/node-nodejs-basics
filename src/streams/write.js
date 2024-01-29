import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWriteFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  let writableStream = fs.createWriteStream(pathToWriteFile);
  stdin.pipe(writableStream);
};

await write();
