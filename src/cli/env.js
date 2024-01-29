const parseEnv = () => {
  let list = '';
  for (let entry of Object.entries(process.env)) {
    entry[0].startsWith('RSS_')
      ? (list += list ? `; ${entry[0]}=${entry[1]}` : `${entry[0]}=${entry[1]}`)
      : null;
  }
  list ? console.log(list) : console.log('No RSS entries');
};

parseEnv();
