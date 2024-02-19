//hello.json - hello.txt

const http = require("http");
const fs = require("fs");
const data = fs.readFileSync('./hello.txt', 'utf-8');

// const server = http.createServer((req, res) => {
//     res.setHeader('dummy','dummy value');
//     res.setHeader('content-type','text/html');
//     res.setHeader('content-type','application/json');
//     res.end('Welcome to local server ...');
// });

//SECOND METHOD

const server = http.createServer();
server.on("request", (req, res) => {
  res.setHeader('content-type','text/html');
  res.write('<h1 style="color:yellow" >Hello</h1>');
  // res.write('{"hello": 123}');
  res.end();
});

server.listen(1221, () => {
  console.log("Server running on port 1221");
});
