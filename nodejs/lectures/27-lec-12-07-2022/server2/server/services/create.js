const fs = require('fs');
const path = require('path');
const readFn = require('./read.js');

const dataDirPath = path.join(__dirname + '/./../data');

function create(student) {
  const students = JSON.parse(readFn());
  console.log('from create func: ', students);
}

module.exports = create;