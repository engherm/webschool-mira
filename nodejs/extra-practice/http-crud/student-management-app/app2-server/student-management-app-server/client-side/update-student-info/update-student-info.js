const body = document.querySelector('body');
const h2 = document.createElement('h2');
h2.innerText = 'Response from server:';
body.append(h2);

const updateStudentInfoForm = document.getElementById(
  'update-student-info-form'
);

function displayMsg(msg) {
  const h3 = document.createElement('h3');
  h3.innerText = msg;
  body.append(h3);
}

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
    .then((res) => displayMsg(res));
});
