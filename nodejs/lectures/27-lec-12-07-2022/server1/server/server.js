const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 6969;
const viewsDirPath = path.join(__dirname + '/./views');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch(url) {

  }
});

server.listen(PORT, () => {
  console.log(`Server up and running. Listening on port ${PORT} (-;`);
});
