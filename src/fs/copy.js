import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToReadDirectory = path.join(__dirname, 'files');
const pathToWriteDirectory = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.promises.cp(pathToReadDirectory, pathToWriteDirectory, {
      errorOnExist: true,
      recursive: true,
      force: false,
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
