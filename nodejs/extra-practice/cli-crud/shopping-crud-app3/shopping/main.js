const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : "read";

const readFn = require("./api/read.js");
const createFn = require("./api/create.js");
const updateFn = require("./api/update.js");
const deleteFn = require("./api/delete.js");
const sumFn = require("./api/sum.js");


switch (command) {
  case "read":
    const cart = readFn();
    console.log(`Displaying cart:\n`, cart);
    break;
  case "create":
    if (args[1]) {
      const lastCharIdx = args[1].length - 1;
      if (args[1][0] === "{" && args[1][lastCharIdx] === "}") {
        const productToCreate = JSON.parse(args[1]);
        if (Object.keys(productToCreate).includes("id")) {
          if (Object.keys(productToCreate).length >= 3) {
            const msg = createFn(productToCreate);
            console.log(msg);
          } else {
            console.log(
              "No enough data provided: missing at least product name and product price"
            );
          }
        } else {
          console.log("Missing id of the product to be created");
        }
      } else {
        console.log(
          `Argument to function create must be an object - 
          e.g. '{"id": 1, "name": "Dubonim", "price": 100}'`
        );
      }
    } else {
      console.log(
        `Missing argument to function create - 
        e.g. '{"id": 1, "name": "Dubonim", "price": 100}'`
      );
    }
    break;
  case "update":
    if (args[1]) {
      const lastCharIdx = args[1].length - 1;
      if (args[1][0] === "{" && args[1][lastCharIdx] === "}") {
        const dataToUpdateObj = JSON.parse(args[1]);
        if (Object.keys(dataToUpdateObj).length !== 0) {
          if (Object.keys(dataToUpdateObj).includes("id")) {
            if (Object.keys(dataToUpdateObj).length > 1) {
              const msg = updateFn(dataToUpdateObj);
              console.log(msg);
            } else {
              console.log(
                "Not enough data provided for update. Missing at least one field besides ID"
              );
            }
          } else {
            console.log("Missing ID of product to update");
          }
        } else {
          console.log("No data provided for update");
        }
      } else {
        console.log(
          `Argument to function update must be an object - 
          e.g. '{"id": 1, "name": "Dubonim", "price": 100}'`
        );
      }
    } else {
      console.log(`Missing argument to function update - 
      e.g. '{"id": 1, "name": "Dubonim", "price": 100}'`);
    }
    break;
  case "delete":
    if (args[1]) {
      const lastCharIdx = args[1].length - 1;
      if (args[1][0] === "{" && args[1][lastCharIdx] === "}") {
        const productToDeleteById = JSON.parse(args[1]);
        if (
          Object.keys(productToDeleteById).length === 1 &&
          Object.keys(productToDeleteById).includes("id")
        ) {
          const msg = deleteFn(productToDeleteById);
          console.log(msg);
        } else {
          console.log("Must provide data object only with ID field");
        }
      } else {
        console.log(
          `Argument to function delete must be an object - 
          e.g. '{"id": 1}'`
        );
      }
    } else {
      console.log(`Missing argument to function delete - 
      e.g. '{"id": 1}'`);
    }
    break;
  case "sum":
    const totalAmount = sumFn();
    console.log(`The total amount in your cart is ${totalAmount}`);
    break;
  default:
    console.log(`'${command}' - unknown command`);
}
