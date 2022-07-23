const body = document.querySelector('body')
const btn = document.querySelector('#btn');

function addVerse(lyrics) {
  const pre = document.createElement('pre');
  pre.innerText = lyrics;
  body.append(pre);
}

btn.addEventListener('click', () => {
  fetch('http://localhost:6464/btnClicked')
  .then(res => res.text())
  .then(res => addVerse(res));
});