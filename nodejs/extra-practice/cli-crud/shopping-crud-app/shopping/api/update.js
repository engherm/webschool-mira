const fs = require('fs');
const path = require('path');
const readFn = require('./read');
const dataPath = path.join(__dirname + '/./../data');
const utilsPath = path.join(__dirname + '/./../utils');
const hasSameIdFn = require(utilsPath + '/has-same-id');

function update(updatedDataObj) {
  const theId = updatedDataObj.id;
  const cart = readFn();
  if (hasSameIdFn(cart, updatedDataObj)) {
    for (const prod of cart) {
      if (prod.id === theId) {
        for (const key in updatedDataObj) {
          if (key !== 'id') {
            prod[key] = updatedDataObj[key];
          }
        }
        break;
      }
    }
    fs.writeFileSync(dataPath + '/cart.json', JSON.stringify(cart))
    return `Product with id ${theId} was successfully updated.`
  }
  return `Update failed. Product with id ${theId} was not found.`
}

module.exports = update;
