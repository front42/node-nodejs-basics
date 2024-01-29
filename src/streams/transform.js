import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).trim().split('').reverse().join('') + '\n');
    },
  });
  stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
