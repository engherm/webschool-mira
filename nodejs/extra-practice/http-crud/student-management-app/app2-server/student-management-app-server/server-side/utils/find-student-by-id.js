function findStudentById(students, id) {
  for (const student of students) {
    if (student.id === id) return student;
  }
}

module.exports = findStudentById;