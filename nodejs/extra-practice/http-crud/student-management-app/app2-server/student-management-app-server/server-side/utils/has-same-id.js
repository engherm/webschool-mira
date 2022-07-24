function hasSameId(students, idToBeAdded) {
  if (students.length === 0)  return false;
  for (const student of students) {
    if (student.id === idToBeAdded) return true;
  }
  return false;
}

module.exports = hasSameId;