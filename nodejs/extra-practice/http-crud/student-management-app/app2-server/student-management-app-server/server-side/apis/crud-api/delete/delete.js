const fs = require('fs');
const path = require('path');

const readFn = require('./../read/read.js');

const databaseDirPath = path.join(__dirname + '/./../../../database');
const utilsDirPath = path.join(__dirname + '/../../../utils');
const hasSameIdFn = require(utilsDirPath + '/has-same-id.js');
const findStudentByIdFn = require(utilsDirPath + '/find-student-by-id.js');

function remove(idObj) {
  const students = JSON.parse(readFn());
  const idToBeRemoved = idObj.id;
  if (hasSameIdFn(students, idToBeRemoved)) {
    const studentToBeRemoved = findStudentByIdFn(students, idToBeRemoved);
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === idToBeRemoved) {
        students.splice(i, 1);
        break;
      }
    }
    fs.writeFileSync(
      databaseDirPath + '/students-info.json',
      JSON.stringify(students)
    );
    return `The student ${studentToBeRemoved.name} 
    was successfully removed from the class.`;
  }
  return `Cannot remove student with id ${idToBeRemoved} - does not exist.`;
}

module.exports = remove;
