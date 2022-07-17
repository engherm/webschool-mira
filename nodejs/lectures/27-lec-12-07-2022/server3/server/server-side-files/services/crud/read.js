const fs = require("fs");
const path = require("path");

const dataDirPath = path.join(__dirname + "/./../../data");

function read() {
  const students = fs.readFileSync(dataDirPath + "/students.json", "utf-8");
  return students;
}

module.exports = read;