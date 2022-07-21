const fs = require('fs');
const path = require('path');
const readFn = require('./read');
const dataPath = path.join(__dirname + '/./../data');
const utilsPath = path.join(__dirname + '/./../utils');
const hasSameIdFn = require(utilsPath + '/has-same-id');

function deleteFn(id) {
  let deletedProduct;
  const cart = readFn();
  if (hasSameIdFn(cart, id)) {
    console.log('Yes! has same id');
    for (let i = 0; i < cart.length; i++) {
      if(cart[i].id === id) {
        deletedProduct = cart.splice(i, 1);
        break;
      }
    }
    fs.writeFileSync(dataPath + '/cart.json', JSON.stringify(cart));
    console.log('deleted product', deletedProduct);
  } else console.log(`Failed to delete product with id ${id}. Doesn't exist.`);
}

module.exports = deleteFn;