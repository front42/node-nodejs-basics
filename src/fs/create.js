import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWriteFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await fs.promises.writeFile(pathToWriteFile, 'I am fresh and young', { flag: 'wx' });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
