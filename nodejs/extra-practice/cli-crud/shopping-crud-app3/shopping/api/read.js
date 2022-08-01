const fs = require("fs");
const path = require("path");
const dataDirPath = path.join(__dirname + "/./../data");

function read() {
  const cartStr = fs.readFileSync(dataDirPath + "/cart.json", "utf-8");
  const cartArr = JSON.parse(cartStr);
  return cartArr;
}

module.exports = read;