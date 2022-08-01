const fs = require("fs");
const path = require("path");
const readFn = require("./read.js");

const dataDirPath = path.join(__dirname + "/./../data");

function update(dataToUpdateObj) {
  const cartArr = readFn();
  const dataToUpdateId = dataToUpdateObj.id;
  for (const cartProduct of cartArr) {
    if (cartProduct.id === dataToUpdateId) {
      for (const key in dataToUpdateObj) {
        if (key !== "id") {
          cartProduct[key] = dataToUpdateObj[key];
        }
      }
      const cartStringified = JSON.stringify(cartArr);
      fs.writeFileSync(dataDirPath + "/cart.json", cartStringified);
      return `Product with ID ${dataToUpdateId} was successfully updated wuth the given data`;
    }
  }
  return `Data update for product with ID ${dataToUpdateId} could not be updated. The given product ID does not exist in the cart. Update Failed.`;
}

module.exports = update;
