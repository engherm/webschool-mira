const body = document.querySelector('body');
const removeStudentForm = document.getElementById('remove-student-form');
const h2 = document.createElement('h2');
h2.innerText = 'Response from server:'
body.append(h2);

function displayMsg(msg) {
  const h3 = document.createElement('h3');
  h3.innerText = msg;
  body.append(h3);
}

removeStudentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const removeStudentJsonData = {};
  const removeStudentFormData = new FormData(removeStudentForm);

  for (const [k, v] of removeStudentFormData) {
    removeStudentJsonData[k] = v;
  }
  fetch('http://localhost:5252/api/crud/students', {
    method: 'DELETE',
    body: JSON.stringify(removeStudentJsonData),
  })
    .then((res) => res.text())
    .then((res) => displayMsg(res));
});
