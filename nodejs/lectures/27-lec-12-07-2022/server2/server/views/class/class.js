const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  fetch('http://localhost:9899/api/getStudents')
  .then(res => res.json())
  .then(res => console.log(res));
});