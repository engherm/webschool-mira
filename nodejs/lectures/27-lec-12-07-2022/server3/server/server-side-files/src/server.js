const http = require("http");
const fs = require("fs");
const path = require("path");

const crudDirPath = path.join(__dirname + "/./../services/crud");
const clientDirPath = path.join(__dirname + "/./../../client-side-files");

// const readFn = require(crudDirPath + "/read.js");
// const createFn = require(crudDirPath + "/create.js");
// const updateFn = require(crudDirPath + "/update.js");
// const deleteFn = require(crudDirPath + "/delete.js");

const PORT = 7879;
console.log("here i am");
const server = http.createServer((req, res) => {
  console.log("I am here as well");
  const method = req.method;
  const url = req.url;
  switch (url) {
    case "/":
      console.log("from /", url);
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
      res.end("Showing students");
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
    default:
      fs.createReadStream(
        clientDirPath + "/page-not-found-404/page-not-found-404.html"
      ).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is up and running. Listening on port ${PORT}`);
});
