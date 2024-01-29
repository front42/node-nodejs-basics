import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
const pathToDecompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  if (fs.existsSync(pathToArchive)) {
    let readableStream = fs.createReadStream(pathToArchive);
    let writableStream = fs.createWriteStream(pathToDecompressedFile);
    readableStream.pipe(createUnzip()).pipe(writableStream);
  } else {
    throw new Error('ZIP operation failed');
  }
};

await decompress();
