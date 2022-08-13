const username = localStorage.getItem('username');
console.log('From manage page: ', username);

const h1 = document.querySelector('h1');
h1.innerText += `, ${username}`;