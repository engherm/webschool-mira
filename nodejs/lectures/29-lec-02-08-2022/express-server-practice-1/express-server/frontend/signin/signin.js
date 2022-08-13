const body = document.querySelector('body');
const h3 = document.createElement('h3');
h3.innerText = 'Choose Wisely - Invest Wisely';
h3.style.fontStyle = 'italic';
h3.style.margin = '70px';

body.append(h3);

const signinForm = document.getElementById('signin-form');

const FormInputs = {
  username: document.getElementById('username'),
  password: document.getElementById('password'),
};

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signinJsonData = {};
  const signinFormData = new FormData(signinForm);
  for (const [key, value] of signinFormData) {
    signinJsonData[key] = value;
  }

  for (const key in FormInputs) {
    FormInputs[key].value = '';
  }

  function verifySignin(toSignin, signinData) {
    if (toSignin['toSignin']) {
      localStorage.setItem('username', signinData.username);
      window.location.assign('/manage');
    } else {
      const msg = document.createElement('h3');
      msg.innerText = 'Sign in failed. Incorrect username or password';
      msg.style.padding = '30px';
      signinForm.append(msg);
    }
  }

  console.log('signinJsonData', signinJsonData);

  fetch('http://localhost:1948/api/signin', {
    method: 'POST',
    body: JSON.stringify(signinJsonData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => verifySignin(res, signinJsonData))
});
