const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : "read";
const readFn = require("./api/read.js");
const createFn = require("./api/create.js");
const updateFn = require("./api/update.js");
let msg;

switch (command) {
  case "read":
    const cart = readFn();
    console.log("cart", cart);
    break;
  case "create":
    if (args[1]) {
      if (args[1][0] === "{" && args[1][args[1].length - 1] === "}") {
        const productToAdd = JSON.parse(args[1]);
        msg = createFn(productToAdd);
        console.log(msg);
      } else {
        console.log("Argument to function create must be object {}");
      }
    } else {
      console.log("Missing argument to function create");
    }
    break;
  case "update":
    if (args[1]) {
      if (args[1][0] === "{" && args[1][args[1].length - 1] === "}") {
        const updateDataObj = JSON.parse(args[1]);
        msg = updateFn(updateDataObj);
        console.log(msg);
      } else {
        console.log("Argument to function update must be of type object - eg '{}'");
      }
    } else {
      console.log("Missing argument to function update");
    }
    break;
  default:
    console.log(`${command} - unknown command`);
}
