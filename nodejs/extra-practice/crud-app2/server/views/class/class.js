const getStudentsBtn = document.getElementById("get-students-btn");

getStudentsBtn.addEventListener("click", () => {
  fetch("http://localhost:8686/getStudents")
  .then(res => res.text())
  .then(res => console.log(res));
});
