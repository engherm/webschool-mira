const fs = require("fs");
const path = require("path");
const readFn = require("./read.js");
const dataDirPath = path.join(__dirname + "/./../data");

function create(prodToCreate) {
  const currentCart = readFn();
  for (let i = 0; i < currentCart.length; i++) {
    const currentProduct = currentCart[i];
    if (currentProduct.id === prodToCreate.id) {
      return `Id - ${prodToCreate.id} - is in use.`;
    }
  }
  currentCart.push(prodToCreate);
  fs.writeFileSync(
    dataDirPath + '/cart.json', JSON.stringify(currentCart)
  );
  return `Product ${prodToCreate.name} with ID ${prodToCreate.id} was created`;
}

module.exports = create;
