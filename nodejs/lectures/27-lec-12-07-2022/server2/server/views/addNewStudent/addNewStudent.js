const form = document.getElementById('f');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const jsonData = {};
  // FormData allows you to loop over the form's data
  const data = new FormData(form);
  for (const [key, value] of data) {
    jsonData[key] = value;
  }
  fetch('http://localhost:9899/api/students', {
    method: 'POST',
    body: JSON.stringify(jsonData),
  })
    .then((res) => res.text())
    .then((res) => console.log('response from create: ', res));
});
