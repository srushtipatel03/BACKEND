// https modules

// 127.0.0.1:3333

const http = require('http');

// SERVER-1
const server = http.createServer((req, res) => {
    res.end('Welcome to local server 1...');
});     // server create     

server.listen(3333, () => {
    console.log('Server running on port 3333');
});
