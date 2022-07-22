const http = require('http');
const PORT = 6464;
const server = http.createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Server is up and running, listening on port ${PORT}.`);
});
