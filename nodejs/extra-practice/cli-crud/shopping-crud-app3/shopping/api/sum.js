const readFn = require("./read.js");

function sum() {
  const cartArr = readFn();
  let total = 0;
  for (const cartProduct of cartArr) {
    total += parseFloat(cartProduct.price);
  }
  return total;
}

module.exports = sum;
