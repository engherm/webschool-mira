const http = require("http");
const fs = require("fs");
const path = require("path");
const readFn = require("./services/read.js");
const viewsDir = path.join(__dirname + "/./views");

const PORT = 8686;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case "/class":
      fs.createReadStream(viewsDir + "/class/class.html").pipe(res);
      break;
    case "/classHomeStyle":
      fs.createReadStream(viewsDir + "/class/class.css").pipe(res);
      break;
    case "/classHomeScript":
      fs.createReadStream(viewsDir + "/class/class.js").pipe(res);
      break;
    case "/addStudent":
      fs.createReadStream(viewsDir + "/addStudent/addStudent.html").pipe(res);
      break;
    case "/addStudentScript":
      fs.createReadStream(viewsDir + "/addStudent/addStudent.js").pipe(res);
      break;
    case "/getStudents":
      const students = readFn();
      res.end(students);
  }
});

server.listen(PORT, () => {
  console.log(`Server is up and running. Listening on port ${PORT}`);
});
