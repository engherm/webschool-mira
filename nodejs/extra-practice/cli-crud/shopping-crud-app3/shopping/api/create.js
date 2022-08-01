const fs = require("fs");
const path = require("path");
const readFn = require("./read.js")

const dataDirPath = path.join(__dirname + "/./../data");

function create(productToCreate) {
  const cartArr = readFn();
  const productIdToCreate = productToCreate.id;
  for (const cartProduct of cartArr) {
    if (cartProduct.id === productIdToCreate) {
      return `Product with ID ${productIdToCreate} already exists. Nothing created.`
    }
  }
  cartArr.push(productToCreate);
  const cartStringified = JSON.stringify(cartArr);
  fs.writeFileSync(dataDirPath + "/cart.json", cartStringified);
  return `Product with ID ${productIdToCreate} was successfully created.`;
}

module.exports = create;