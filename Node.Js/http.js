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

// SERVER-2
const server2 = http.createServer((req, res) => {
    res.end('Welcome to local server 2...');
});    

server2.listen(4444, () => {
    console.log('Server running on port 4444');
});

// SERVER-3
const server3 = http.createServer((req, res) => {
    res.end('Welcome to local server 3...');
});        

server3.listen(3434, () => {
    console.log('Server running on port 3434');
});

//SERVER-4
const server4 = http.createServer((req, res) => {
    res.end('Welcome to local server 4...');
});

server4.listen(4343, () => {
    console.log('Server running on port 4343');
});

//SERVER-5
const server5 = http.createServer((req, res) => {
    res.end('Welcome to local server 5...');
});        

server5.listen(2342, () => {
    console.log('Server running on port 2342');
});