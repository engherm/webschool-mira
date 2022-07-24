const fs = require('fs');
const path = require('path');

const databaseDirPath = path.join(__dirname + '/./../../../database');
const utilsDirPath = path.join(__dirname + '/./../../../utils');

const readFn = require('./../read/read.js');
const hasSameIdFn = require(utilsDirPath + '/has-same-id.js');
const findStudentByIdFn = require(utilsDirPath + '/find-student-by-id.js');
const isUpdateableFn = require(utilsDirPath + '/is-updateable.js');

function update(updateDataObj) {
  if (isUpdateableFn(updateDataObj)) {
    // An updateDataObj is actually updateable (can be used to update student info)
    // if it has at least two keys with truthy values - id is required and at least 
    // another key. 
    const idToBeUpdated = updateDataObj.id;
    const students = JSON.parse(readFn());
    if (hasSameIdFn(students, idToBeUpdated)) {
      const studentToBeUpdated = findStudentByIdFn(students, idToBeUpdated);
      for (const key in updateDataObj) {
        if (key !== 'id') {
          studentToBeUpdated[key] = updateDataObj[key];
        }
      }
      fs.writeFileSync(databaseDirPath + '/students-info.json', JSON.stringify(students));
      return `The update of student with id ${idToBeUpdated} was successfully carried out`;
    }
    return `Update failed - Student with id ${idToBeUpdated} does not exist in the class`;
  }
  return `It seems there's no new data to update here...`;
}

module.exports = update;
