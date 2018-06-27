'use strict';

const fs = require('fs');

const file = `${__dirname}/../assets/1.txt`;
const logger = require('./../logger');

const data = fs.readFileSync(file);

fs.readFile(file, (err, newData) => {
  if (err) throw err;
});

logger.log(logger.INFO, `New data ${newData.toString()}`);
