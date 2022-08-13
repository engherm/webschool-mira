const body = document.querySelector("body");
const addNewStudentForm = document.getElementById("add-new-student-form");

const h2 = document.createElement("h2");
h2.innerText = `Response from server:`;
body.append(h2);

function outputMsg(msg) {
  const h3 = document.createElement("h3");
  h3.innerText = msg;
  body.append(h3);
}

addNewStudentForm.addEventListener("submit", (e) => {
  submitForm(e);
});

function submitForm(e) {
  e.preventDefault();

  const studentJsonData = {};
  const studentFormData = new FormData(addNewStudentForm);
  for (const [k, v] of studentFormData) {
    studentJsonData[k] = v;
  }

  console.log("before fetch", studentJsonData);

  fetch("http://localhost:9876/api/crud", {
    method: "POST",
    body: JSON.stringify(studentFormData),
  })
    .then((res) => res.text())
    .then((res) => outputMsg(res));

  addNewStudentForm.removeEventListener("submit", submitForm);
}
