const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const databaseDirPath = path.join(__dirname + '/./../../database');

function read() {
  return JSON.parse(
    fs.readFileSync(databaseDirPath + '/customers.json', 'utf-8')
  );
}

async function register(registrationData) {
  console.log('Registration data from utils-api:', registrationData);
  const customers = read();
  // going over existing usernames and comparing to registration username 
  for (const customer of customers) {
    if (customer.username === registrationData.username) {
      return false;  // registration username is already taken
    }
  }
  // From here registration is successfull
  // First customer of account is set as account owner by default
  if (customers.length === 0) {
    registrationData['isAccountOwner'] = true;
  } else {
    registrationData['isAccountOwner'] = false;
  }

  registrationData['amount'] = 500; // award balance with starting amount of 500
  const plainPassword = registrationData.password;
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  registrationData.password = hashedPassword;
  customers.push(registrationData);
  fs.writeFileSync(
    databaseDirPath + '/customers.json',
    JSON.stringify(customers),
    'utf-8'
  );
  return true;
}

async function signin(signinData) {
  console.log('signinData from customer-utils.js: ', signinData);
  const customers = read();
  for (const customer of customers) {
    if (customer.username === signinData.username) {
      return await bcrypt.compare(signinData.password, customer.password);
    }
  }
  return false;
}

module.exports = { register, signin };
