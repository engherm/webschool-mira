const http = require("http"); // to use a server
const fs = require("fs"); // to use the file system
const path = require("path"); // to correctly merge paths to one absolute path


const clientSideDirPath = path.join(__dirname + "/./../../client-side-dir");
const crudDirPath = path.join(__dirname + "/./../api/crud");
const utilsDirPath = path.join(__dirname + "/./../api/utils");

const readFn = require(crudDirPath + "/read/read.js");
const createFn = require(crudDirPath + "/create/create.js");
const updateFn = require(crudDirPath + "/update/update.js");
const deleteFn = require(crudDirPath + "/delete/delete.js");
const handleIncomingBuffersFn = require(utilsDirPath + "/handle-incoming-buffers.js");

const PORT = 9876;

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;

  switch (url) {
    case "/api/crud":
      let msgToClient;
      let studentData;
      switch (method) {
        case "GET":
          const students = readFn();
          res.end(students);
          break;
        case "POST":
          studentData = await handleIncomingBuffersFn(req);
          console.log("from post", studentData);
          msgToClient = createFn(studentData);
          res.end(msgToClient);
          break;
        case "PUT":
          break;
        case "DELETE":
          break;
      }
      break;
    case "/":
      fs.createReadStream(clientSideDirPath + "/home/home.html").pipe(res);
      break;
    case "/homeStyle":
      fs.createReadStream(clientSideDirPath + "/home/home.css").pipe(res);
      break;
    case "/homeScript":
      fs.createReadStream(clientSideDirPath + "/home/home.js").pipe(res);
      break;
    case "/displayStudents":
      fs.createReadStream(
        clientSideDirPath + "/display-students/display-students.html"
      ).pipe(res);
      break;
    case "/displayStudentsStyle":
      fs.createReadStream(
        clientSideDirPath + "/display-students/display-students.css"
      ).pipe(res);
      break;
    case "/displayStudentsScript":
      fs.createReadStream(
        clientSideDirPath + "/display-students/display-students.js"
      ).pipe(res);
      break;
    case "/addNewStudent":
      fs.createReadStream(
        clientSideDirPath + "/add-new-student/add-new-student.html"
      ).pipe(res);
      break;
    case "/addNewStudentStyle":
      fs.createReadStream(
        clientSideDirPath + "/add-new-student/add-new-student.css"
      ).pipe(res);
      break;
    case "/addNewStudentScript":
      fs.createReadStream(
        clientSideDirPath + "/add-new-student/add-new-student.js"
      ).pipe(res);
      break;
    case "/updateStudentData":
      fs.createReadStream(
        clientSideDirPath + "/update-student-data/update-student-data.html"
      ).pipe(res);
      break;
    case "/updateStudentDataStyle":
      fs.createReadStream(
        clientSideDirPath + "/update-student-data/update-student-data.css"
      ).pipe(res);
      break;
    case "/updateStudentDataScript":
      break;
    case "/deleteStudent":
      fs.createReadStream(
        clientSideDirPath + "/delete-student/delete-student.html"
      ).pipe(res);
      break;
    case "/deleteStudentStyle":
      fs.createReadStream(
        clientSideDirPath + "/delete-student/delete-student.css"
      ).pipe(res);
      break;
    case "/deleteStudentScript":
      break;
    case "/pageNotFound404Style":
      break;
    default:
      fs.createReadStream(
        clientSideDirPath + "/page-not-found-404/page-not-found-404.html"
      ).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`\nServer is up and running, listening on port ${PORT}\n`);
});
