import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToReadFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    console.log(await fs.promises.readFile(pathToReadFile, 'utf-8'));
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
