const http = require('http');

//SERVER-4
const server4 = http.createServer((req, res) => {
    res.end('Welcome to local server 4...');
});

server4.listen(4343, () => {
    console.log('Server running on port 4343');
});