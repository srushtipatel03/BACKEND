const http = require('http');

//SERVER-5
const server5 = http.createServer((req, res) => {
    res.end('Welcome to local server 5...');
});        

server5.listen(2342, () => {
    console.log('Server running on port 2342');
});