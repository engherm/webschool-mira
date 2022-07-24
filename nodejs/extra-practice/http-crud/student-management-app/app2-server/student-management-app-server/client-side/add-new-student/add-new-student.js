const body = document.querySelector('body');
const addNewStudentForm = document.getElementById('add-new-student-form');
const confirmH2 = document.createElement('h2');
confirmH2.innerText = `Response from server:`;
body.append(confirmH2);

function outputMsg(msg) {
  const h3 = document.createElement('h3');
  h3.innerText = msg;
  body.append(h3);
}

addNewStudentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const studentJsonData = {};
  const studentFormData = new FormData(addNewStudentForm);
  for (const [k, v] of studentFormData) {
    studentJsonData[k] = v;
  }

  fetch('http://localhost:5252/api/crud/students', {
    method: 'POST',
    body: JSON.stringify(studentJsonData),
  })
    .then((res) => res.text())
    .then((res) => outputMsg(res)); // res here is the confirmation message from server
});
