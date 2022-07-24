const updateStudentInfoForm = document.getElementById(
  'update-student-info-form'
);

updateStudentInfoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const updateStudentJsonData = {};
  const updateStudentFormData = new FormData(updateStudentInfoForm);
  for (const [k, v] of updateStudentFormData) {
    if (v) updateStudentJsonData[k] = v; // only use keys with truthy values
  }

  fetch('http://localhost:5252/api/crud/students', {
    method: 'PUT',
    body: JSON.stringify(updateStudentJsonData),
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
});
