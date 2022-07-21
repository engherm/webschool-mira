const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : 'read';

const readFn = require('./api/read');
const createFn = require('./api/create');
const updateFn = require('./api/update');
const deleteFn = require('./api/delete');

switch (command) {
  case 'read':
    const cart = readFn();
    console.log('cart', cart, typeof cart);
    break;
  case 'create':
    if (args[1]) {
      console.log('args[1].length =', args[1].length);
      const len = args[1].length;
      console.log('len', len);
      if (args[1][0] === '{' && args[1][len - 1] === '}') {
        const newProductObj = JSON.parse(args[1]);
        console.log(newProductObj.id);
        if (newProductObj.id) {
          const msg = createFn(JSON.parse(args[1]));
          console.log('message: ', msg);
        } else console.log('product id number missing');
      } else {
        console.log(
          args[1],
          typeof args[1],
          args[1][0],
          args[1][args[1].length - 1]
        );
        console.log(args[1].length);
        console.log(args[1][1], args[1][2]);
        console.log(args[1][38]);
        console.log('argument to create function must be an object');
      }
    } else console.log('missing argument to create function');
    break;
  case 'update':
    if (args[1]) {
      const len = args[1].length;
      if (args[1][0] === '{' && args[1][len - 1] === '}') {
        const updateDataForProdObj = JSON.parse(args[1])
        if (updateDataForProdObj.id) {
          console.log("data to update",updateDataForProdObj);
          const msg = updateFn(updateDataForProdObj);
          console.log('message: ', msg);
        } else console.log("missing id - data to update must contain product id");
      } else console.log('argument to update function must be an object');
    } else console.log('missing argument to update function');
    break;
  case 'delete':
    console.log(args[1], typeof args[1]);
    deleteFn(parseInt(args[1]));
    break;
  default:
    console.log('Unknown command');
}
