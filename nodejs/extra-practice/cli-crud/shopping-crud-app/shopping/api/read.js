const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname + '/./../data');

function read() {
  const cart = fs.readFileSync(dataPath + '/cart.json', {encoding: 'utf-8'});
  const cartArr = JSON.parse(cart);
  return cartArr;
}

module.exports = read;
