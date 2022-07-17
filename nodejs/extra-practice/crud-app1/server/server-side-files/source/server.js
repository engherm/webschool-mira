const http = require('http');
const fs = require('fs');
const path = require('path');

const clientDirPath = path.join(__dirname + '/./../../client-side-files');

const PORT = 7777;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case '/':
      const homeHtml = fs.readFileSync(clientDirPath + '/home/home.html');
      res.end(homeHtml);
      break;
    case '/showStudents':
      const showStudents = fs.readFileSync(
        clientDirPath + '/show-students/show-students.html'
      );
      res.end(showStudents);
      break;
    case '/showStudentsScript':
      const showStudentsScript = fs.readFileSync(
        clientDirPath + '/show-students/show-students.js'
      );
      res.end(showStudentsScript);
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is up and running. Listening on port ${PORT}`);
});
