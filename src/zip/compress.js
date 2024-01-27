import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToOriginalFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToArchive = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  if (fs.existsSync(pathToOriginalFile)) {
    let readableStream = fs.createReadStream(pathToOriginalFile);
    let writableStream = fs.createWriteStream(pathToArchive);
    readableStream.pipe(createGzip()).pipe(writableStream);
  } else {
    throw new Error('ZIP operation failed');
  }
};

await compress();
