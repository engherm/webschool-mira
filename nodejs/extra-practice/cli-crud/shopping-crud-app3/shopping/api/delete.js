const fs = require("fs");
const path = require("path");
const readFn = require("./read.js");

const dataDirPath = path.join(__dirname + "/./../data");

function remove(productToDeleteById) {
  const cartArr = readFn();
  const theIdToDelete = productToDeleteById.id;

  for (const cartProduct of cartArr) {
    if (cartProduct.id === theIdToDelete) {
      const prodToDelIdx = cartArr.indexOf(cartProduct);
      cartArr.splice(prodToDelIdx, 1);
      const cartStringified = JSON.stringify(cartArr);
      fs.writeFileSync(dataDirPath + "/cart.json", cartStringified);
      return `Product ${JSON.stringify(cartProduct)} was deleted successfully.`
    }
  }
  return `Could not find product with ID ${theIdToDelete} to delete. Nothing deleted.`
}

module.exports = remove;
