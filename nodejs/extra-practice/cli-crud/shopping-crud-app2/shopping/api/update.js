const fs = require("fs");
const path = require("path");
const readFn = require("./read.js");

const dataDirPath = path.join(__dirname + "/./../data");

function update(updateDataObj) {
  const currentCart = readFn();
  for (const product of currentCart) {
    if (product.id === updateDataObj.id) {
      for (const key in updateDataObj) {
        if (key !== "id") {
          product[key] = updateDataObj[key];
        }
      }
      fs.writeFileSync(dataDirPath + "/cart.json", JSON.stringify(currentCart));
      return `Product with ID ${updateDataObj.id} was successfully updated`;
    }
  }
  return `Product update with ID ${updateDataObj.id} failed - not found`;
}

module.exports = update;
