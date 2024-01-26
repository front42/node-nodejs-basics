import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToDeleteFile = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.promises.unlink(pathToDeleteFile);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
