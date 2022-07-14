const http = require('http');
const fs = require('fs');
const path = require('path');
const readFn = require('./../services/read.js');
const createFn = require('./../services/create.js');

const viewsDirPath = path.join(__dirname + '/./../views');

const PORT = 9899;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case '/class':
      fs.createReadStream(viewsDirPath + '/class/class.html').pipe(res);
      break;
    case '/classJS':
      fs.createReadStream(viewsDirPath + '/class/class.js').pipe(res);
      break;
    case '/addNewStudent':
      fs.createReadStream(
        viewsDirPath + '/addNewStudent/addNewStudent.html'
      ).pipe(res);
      break;
    case '/addNewStudentScript':
      fs.createReadStream(
        viewsDirPath + '/addNewStudent/addNewStudent.js'
      ).pipe(res);
      break;
    // api cases:
    case '/api/getStudents':
      const students = readFn();
      res.end(students);
      break;
    case '/api/students':
      switch(method) {
        case 'POST':
          res.end('hi from post');
          break;
      }
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is up and running. Listening on port ${PORT}`);
});
