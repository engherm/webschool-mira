const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname + "/./../data");

function read() {
  const students = fs.readFileSync(dataPath + "/students.json", "utf-8");
  return students;
}

module.exports = read;