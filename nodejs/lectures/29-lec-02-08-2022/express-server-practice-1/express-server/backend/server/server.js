const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const frontendDirPath = path.join(__dirname + '/./../../frontend');
const utilsApiDirPath = path.join(__dirname + '/./../apis/utils-api');

const app = express();

const customerUtils = require(utilsApiDirPath + '/customer-utils.js');

app.use(cookieParser())
app.use(express.json());
app.use((req, _, next) => {
  console.log(`Received request from url ${req.url} with method ${req.method}`);
  next();
});

// PAGE REQUESTS
app.use('/', express.static(frontendDirPath + '/home'));
app.get('/', (_, res) => {
  res.sendFile(frontendDirPath + '/home/home.html');
});

app.use('/register', express.static(frontendDirPath + '/register'));
app.get('/register', (_, res) => {
  res.sendFile(frontendDirPath + '/register/register.html');
});

app.use('/signin', express.static(frontendDirPath + '/signin'));
app.get('/signin', (_, res) => {
  res.sendFile(frontendDirPath + '/signin/signin.html');
});

app.use('/manage', express.static(frontendDirPath + '/manage'));

app.get('/manage', (req, res) => {
  const cookies = req.cookies;
  console.log('cookies: ', cookies);
  if (cookies['toSignin']) {
    if (cookies['toSignin'].toSignin) {
      res.sendFile(frontendDirPath + '/manage/manage.html');
      return;
    }
  }
  res.redirect(302, '/signin');
  res.sendFile(frontendDirPath + '/signin/signin.html');
  return;
});

// API REQUESTS
app.post('/api/register', async (req, res) => {
  const registrationData = req.body;
  console.log('Registration data from server: ', registrationData);
  const toRegister = await customerUtils.register(registrationData);
  res.send(JSON.stringify({ toRegister }));
});

app.post('/api/signin', async (req, res) => {
  const signinData = req.body;
  const toSignin = await customerUtils.signin(signinData);
  if (toSignin) {
    res.cookie('toSignin', {toSignin});
  }
  res.send(JSON.stringify({toSignin}));
});

app.get('*', (_, res) => {
  res
    .status(404)
    .sendFile(frontendDirPath + '/page-not-found-404/page-not-found-404.html');
});

const PORT = 1948;
app.listen(PORT, () => {
  console.log(
    `\n ###   S E R V E R   I S   U P   A N D   R U N N I N G,   L I S T E N I N G   O N   P O R T   ${PORT} . . .   ###\n`
  );
});
