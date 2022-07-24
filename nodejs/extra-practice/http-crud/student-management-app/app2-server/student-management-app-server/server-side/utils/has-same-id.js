function hasSameId(students, id) {
  if (students.length === 0)  return false;
  for (const student of students) {
    if (student.id === id) return true;
  }
  return false;
}

module.exports = hasSameId;