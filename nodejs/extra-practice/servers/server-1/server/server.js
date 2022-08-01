const http = require("http");
const fs = require("fs");
const path = require("path");

const viewsDirPath = path.join(__dirname + "/./views");

const PORT = 9898;



const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  console.log("method", method);
  console.log("url", url);
  let homePage;
  switch (url) {
    case "/":
      homePage = fs.readFileSync(viewsDirPath + "/home/home.html");
      res.end(homePage);
      break;

    case "/home":
      homePage = fs.readFileSync(viewsDirPath + "/home/home.html");
      res.end(homePage);
      break;

    case "/login":
      const loginPage = fs.readFileSync(viewsDirPath + "/login/login.html");
      res.end(loginPage);
      break;
    
    default:
      const pageNotFound = fs.readFileSync(viewsDirPath + "/404/404.html");
      res.end(pageNotFound);
  }
});

server.listen(PORT, () => {
  console.log(`Server is up and running, listening on port ${PORT}`);
});
