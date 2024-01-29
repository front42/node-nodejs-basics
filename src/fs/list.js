import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFiles = path.join(__dirname, 'files');

const list = async () => {
  try {
    console.log((await fs.promises.readdir(pathToFiles)).join('\n'));
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
