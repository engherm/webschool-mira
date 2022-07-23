const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : 'read';

const readFn = require('./api/read');
const createFn = require('./api/create');
const updateFn = require('./api/update');
const deleteFn = require('./api/delete');


switch(command) {
  case 'read':
    const cart = readFn();
    console.log('cart', cart);
    break;
  case 'create':
    if (args[1])
      createFn(JSON.parse(args[1]));
    break;
  case 'update':
    updateFn();
    break;
  case 'delete':
    deleteFn();
    break;
  default:
    console.log(`unknown command - ${command}`);
}