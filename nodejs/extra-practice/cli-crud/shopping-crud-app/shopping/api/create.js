const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname + '/./../data');
const utilsPath = path.join(__dirname + '/./../utils');
const readFn = require('./read');
const hasSameIdFn = require(utilsPath + '/has-same-id');

function create(itemToBeAdded) {
  const cart = readFn();
  if (hasSameIdFn(cart, itemToBeAdded)) {
    return `Item with ID ${itemToBeAdded.id} already exists. Failed to create it.`;
  } else {
    cart.push(itemToBeAdded);
    fs.writeFileSync(dataPath + '/cart.json', JSON.stringify(cart));
    return `Item with ID ${itemToBeAdded.id} was successfully created.`;
  }
}

module.exports = create;
