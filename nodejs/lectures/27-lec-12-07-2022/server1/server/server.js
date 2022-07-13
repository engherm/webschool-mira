const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 6969;
const viewsDirPath = path.join(__dirname + '/./views');
const readFn = require('./services/read.js');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch(url) {
    case '/class':
      fs.createReadStream(viewsDirPath + '/class/class.html').pipe(res);
      break;
    case '/classJsPage':
      fs.createReadStream(viewsDirPath + '/class/class.js').pipe(res);
      break;
    case '/getStudents':
      const students = readFn();
      res.end(students);
  }
  
});

server.listen(PORT, () => {
  console.log(`Server up and running. Listening on port ${PORT} (-;`);
});
