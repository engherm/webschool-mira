const fs = require('fs');
const path = require('path');
const databaseDirPath = path.join(__dirname + '/./../../../database');

// We intentionally return the list as string here and do not parse it beforehand
// because we also pass it to res.end()
function read() {
  const studentsStr = fs.readFileSync(
    databaseDirPath + '/students-info.json',
    'utf-8'
  );
  return studentsStr;
}

module.exports = read;
