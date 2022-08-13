const fs = require("fs");
const path = require("path");

const databaseDirPath = path.join(__dirname + "/./../../../database");

function read() {
  const students = fs.readFileSync(databaseDirPath + "/students-db.json", "utf-8");
  return students;
}

module.exports = read;