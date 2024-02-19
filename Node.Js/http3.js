const http = require('http');

// SERVER-3
const server3 = http.createServer((req, res) => {
    res.end('Welcome to local server 3...');
});        

server3.listen(3434, () => {
    console.log('Server running on port 3434');
});