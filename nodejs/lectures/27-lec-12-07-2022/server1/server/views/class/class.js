const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  fetch('http://localhost:6969/getStudents')
  .then(res => res.text())
  .then(res => console.log('response from server: ', res));
});