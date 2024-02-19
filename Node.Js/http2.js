const http = require('http');

// SERVER-2
const server2 = http.createServer((req, res) => {
    res.end('Welcome to local server 2...');
});    

server2.listen(4444, () => {
    console.log('Server running on port 4444');
});