const http = require("http");
const fs = require("fs");
const path = require("path");

const servicesDirPath = path.join(__dirname + "/./../services");
const clientDirPath = path.join(__dirname + "/./../../client-side-files");

const readFn = require(servicesDirPath + "/crud/read.js");
// const createFn = require(crudDirPath + "/create.js");
// const updateFn = require(crudDirPath + "/update.js");
// const deleteFn = require(crudDirPath + "/delete.js");

const PORT = 7879;
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case "/":
      fs.createReadStream(clientDirPath + "/home/home.html").pipe(res);
      break;
    case "/homeStyle":
      fs.createReadStream(clientDirPath + "/home/home.css").pipe(res);
      break;
    case "/homeScript":
      fs.createReadStream(clientDirPath + "/home/home.js").pipe(res);
      break;
    case "/homeImg":
      fs.createReadStream(clientDirPath + "/home/images/doubtfire.jpg").pipe(
        res
      );
      break;
    case "/showStudents":
      fs.createReadStream(
        clientDirPath + "/show-students/show-students.html"
      ).pipe(res);
      break;
    case "/showStudentsStyle":
      fs.createReadStream(
        clientDirPath + "/show-students/show-students.css"
      ).pipe(res);
      break;
    case "/showStudentsScript":
      fs.createReadStream(
        clientDirPath + "/show-students/show-students.js"
      ).pipe(res);
      break;
    case "/addStudent":
      res.end("Added new student");
      break;
    case "/updateStudent":
      res.end("Updated student info");
      break;
    case "/removeStudent":
      res.end("Student removed");
      break;
    case "/api/students":
      console.log("method:", method);
      switch (method) {
        case "GET":
          const students = readFn();
          res.end(students);
          break;
      }
    default:
      fs.createReadStream(
        clientDirPath + "/page-not-found-404/page-not-found-404.html"
      ).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`\nServer is up and running. Listening on port ${PORT}\n`);
});
