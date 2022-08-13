const body = document.querySelector('body');
const h3 = document.createElement('h3');
h3.innerText = 'Choose Wisely - Invest Wisely';
h3.style.fontStyle = 'italic';
h3.style.margin = '70px';
body.append(h3);

const registrationForm = document.getElementById('registration-form');

const FormInputs = {
  fullName: document.getElementById('full-name'),
  username: document.getElementById('username'),
  password: document.getElementById('password'),
  pin: document.getElementById('pin'),
};

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const registrationJsonData = {};
  const registrationFormData = new FormData(registrationForm);

  for (const [key, value] of registrationFormData) {
    registrationJsonData[key] = value;
  }

  for (const key in FormInputs) {
    FormInputs[key].value = '';
  }

  console.log('Registration data from client', registrationJsonData);

  function displayMsg(toRegister, registrationData) {
    const msg = document.createElement('h3');
    console.log('result from server:');
    console.log('toRegister: ', toRegister);
    if (toRegister['toRegister']) {
      msg.innerText = `Registration for username ${registrationData.username} completed successfully`;
    } else {
      msg.innerText = `Username ${registrationData.username} already exsists. Try another username.`;
    }
    registrationForm.append(msg);

    const timerMsg = document.createElement('h3');
    const seconds = document.createElement('span');
    let sec = 10;
    seconds.innerText = sec;
    registrationForm.append(timerMsg);
    let intervalId = setInterval(() => {
      timerMsg.innerText = `You will be redirected to the homepage in ${seconds.innerText} seconds.
      From there, sign in to your new account`;
      sec--;
      seconds.innerText = sec;
      if (sec < 0) {
        clearInterval(intervalId);
        window.location.assign('/');
      }
    }, 1000);
  }

  fetch('http://localhost:1948/api/register', {
    method: 'POST',
    body: JSON.stringify(registrationJsonData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => displayMsg(res, registrationJsonData));
});
