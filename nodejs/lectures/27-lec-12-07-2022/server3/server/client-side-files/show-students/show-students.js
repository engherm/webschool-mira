const displayBtn = document.getElementById('display-btn');

displayBtn.addEventListener("click", () => {
  fetch("http://localhost:7879/api/students")
  .then(res => res.json())
  .then(res => console.log(res));
});