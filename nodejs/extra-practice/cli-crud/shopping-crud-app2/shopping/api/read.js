const fs = require('fs');
const path = require('path');

const dataDirPath = path.join(__dirname + '/./../data');

function read() {
  const cart = fs.readFileSync(dataDirPath + '/cart.json', 'utf-8');
  const cartArr = JSON.parse(cart);
  return cartArr;
}

module.exports = read;