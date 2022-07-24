const fs = require('fs');
const path = require('path');
const databaseDirPath = path.join(__dirname + '/./../../../database');
const utilsDirPath = path.join(__dirname + '/./../../../utils');

const readFn = require('./../read/read.js');
const hasSameIdFn = require(utilsDirPath + '/has-same-id.js');

function create(studentToBeAdded) {
  const students = JSON.parse(readFn());
  // if students arr is empty, hasSameIdFn returns false
    if (!hasSameIdFn(students, studentToBeAdded.id)) {
      students.push(studentToBeAdded);
      fs.writeFileSync(
        databaseDirPath + '/students-info.json',
        JSON.stringify(students)
      );
      return `The student ${studentToBeAdded.name} was successfully added to the class`;
    }
    return `Cannot add the student ${studentToBeAdded.name} - another student with the same ID already exists in the class`;
}

module.exports = create;
