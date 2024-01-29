const parseArgs = () => {
  let list = '';
  const args = process.argv.slice(2);
  for (let str of args) {
    str.startsWith('--')
      ? (list += list ? `, ${str.slice(2)}` : `${str.slice(2)}`)
      : (list += ` is ${str}`);
  }
  list ? console.log(list) : console.log('No arguments');
};

parseArgs();
