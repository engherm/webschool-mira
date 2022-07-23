const http = require('http');
const fs = require('fs');
const path = require('path');
const viewsDirPath = path.join(__dirname + '/./views');
const PORT = 6464;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  switch (url) {
    case '/':
      const homePage = fs.readFileSync(viewsDirPath + '/home/home.html');
      res.end(homePage);
      break;
    case '/homeStyle':
      const homeStylePage = fs.readFileSync(viewsDirPath + '/home/home.css');
      res.end(homeStylePage);
      break;
    case '/homeScript':
      const homeScriptPage = fs.readFileSync(viewsDirPath + '/home/home.js');
      res.end(homeScriptPage);
      break;
    case '/login':
      const loginPage = fs.readFileSync(viewsDirPath + '/login/login.html');
      res.end(loginPage);
      break;
    case '/loginStyle':
      const loginStylePage = fs.readFileSync(viewsDirPath + '/login/login.css');
      res.end(loginStylePage);
      break;
    case '/loginScript':
      const loginScriptPage = fs.readFileSync(viewsDirPath + '/login/login.js');
      res.end(loginScriptPage);
      break;
    case '/btnClicked':
      const songText = fs.readFileSync(viewsDirPath + '/home/song.txt');
      res.end(songText);
      break;
    case '/404Style':
      const notFoundPageStyle = fs.readFileSync(viewsDirPath + '/404/404.css');
      res.end(notFoundPageStyle);
      break;
    default:
      const notFoundPage = fs.readFileSync(viewsDirPath + '/404/404.html');
      res.end(notFoundPage);
  }
});

server.listen(PORT, () => {
  console.log(`Server is up and running, listening on port ${PORT}.`);
});
