import path from 'path';
import { fileURLToPath } from 'url';
import child_process from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWorker = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async args => {
  let worker = child_process.spawn('node', [pathToWorker], {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  });

  worker.on('error', error => {
    console.log('Error:', error.message);
  });

  worker.on('close', code => {
    console.log('Child process exited with code', code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
