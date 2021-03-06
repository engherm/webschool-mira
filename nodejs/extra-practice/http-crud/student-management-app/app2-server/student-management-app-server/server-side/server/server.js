const http = require('http');
const fs = require('fs');
const path = require('path');

const clientSideDirPath = path.join(__dirname + '/./../../client-side');
const crudApiDirPath = path.join(__dirname + '/./../apis/crud-api');
const utilsDirPath = path.join(__dirname + '/./../utils');

const readFn = require(crudApiDirPath + '/read/read.js');
const createFn = require(crudApiDirPath + '/create/create.js');
const updateFn = require(crudApiDirPath + '/update/update.js');
const deleteFn = require(crudApiDirPath + '/delete/delete.js');
const handleIncomingBuffersFn = require(utilsDirPath +
  '/handle-incoming-buffers.js');

const PORT = 5252;

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;

  switch (url) {
    case '/api/crud/students':
      let studentData;
      let msg;
      switch (method) {
        case 'GET':
          const studentsList = readFn();
          res.end(studentsList);
          break;
        case 'POST':
          studentData = await handleIncomingBuffersFn(req);
          msg = createFn(studentData);
          res.end(msg);
          break;
        case 'PUT':
          studentData = await handleIncomingBuffersFn(req);
          msg = updateFn(studentData);
          res.end(msg);
          break;
        case 'DELETE':
          studentData = await handleIncomingBuffersFn(req);
          msg = deleteFn(studentData);
          res.end(msg);
          break;
      }
      break;
    case '/':
      fs.createReadStream(clientSideDirPath + '/home/home.html').pipe(res);
      break;
    case '/homePageProfileImg':
      fs.createReadStream(
        clientSideDirPath + '/home/images/mrs-doubtfire.jpg'
      ).pipe(res);
      break;
    case '/homePageStyle':
      fs.createReadStream(clientSideDirPath + '/home/home.css').pipe(res);
      break;
    case '/homePageScript':
      fs.createReadStream(clientSideDirPath + '/home/home.js').pipe(res);
      break;
    case '/displayStudents':
      fs.createReadStream(
        clientSideDirPath + '/display-students/display-students.html'
      ).pipe(res);
      break;
    case '/displayStudentsPageStyle':
      fs.createReadStream(
        clientSideDirPath + '/display-students/display-students.css'
      ).pipe(res);
      break;
    case '/displayStudentsPageScript':
      fs.createReadStream(
        clientSideDirPath + '/display-students/display-students.js'
      ).pipe(res);
      break;
    case '/addNewStudent':
      fs.createReadStream(
        clientSideDirPath + '/add-new-student/add-new-student.html'
      ).pipe(res);
      break;
    case '/addNewStudentPageStyle':
      fs.createReadStream(
        clientSideDirPath + '/add-new-student/add-new-student.css'
      ).pipe(res);
      break;
    case '/addNewStudentPageScript':
      fs.createReadStream(
        clientSideDirPath + '/add-new-student/add-new-student.js'
      ).pipe(res);
      break;
    case '/updateStudentInfo':
      fs.createReadStream(
        clientSideDirPath + '/update-student-info/update-student-info.html'
      ).pipe(res);
      break;
    case '/updateStudentInfoPageStyle':
      fs.createReadStream(
        clientSideDirPath + '/update-student-info/update-student-info.css'
      ).pipe(res);
      break;
    case '/updateStudentInfoPageScript':
      fs.createReadStream(
        clientSideDirPath + '/update-student-info/update-student-info.js'
      ).pipe(res);
      break;
    case '/removeStudent':
      fs.createReadStream(
        clientSideDirPath + '/remove-student/remove-student.html'
      ).pipe(res);
      break;
    case '/removeStudentPageStyle':
      fs.createReadStream(
        clientSideDirPath + '/remove-student/remove-student.css'
      ).pipe(res);
      break;
    case '/removeStudentPageScript':
      fs.createReadStream(
        clientSideDirPath + '/remove-student/remove-student.js'
      ).pipe(res);
      break;
    case '/pageNotFoundPageStyle':
      fs.createReadStream(
        clientSideDirPath + '/page-not-found-404/page-not-found-404.css'
      ).pipe(res);
      break;
    default:
      fs.createReadStream(
        clientSideDirPath + '/page-not-found-404/page-not-found-404.html'
      ).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log('Server is up and running, listening on port ' + PORT);
});
