// day:1 date:-22/02/2024

// const express = require('express');
// const server = express();           //server create

// server.get('/', (req, res) => {
//     res.send('welcome to Express.js');
// });
// server.get('/user', (req, res) => {
//     res.send('welcome to user page');
// });
// server.get('/product', (req, res) => {
//     res.send('welcome to product page');
// });

// server.listen(3030, () => {
//     console.log('Server running at http://localhost:3030');
// });


//day:2 date:-23/02/2024

const express = require('express');
const server = express();
const path = require('path');

server.post('/', (req, res) => {
    res.send('post method');
});
server.get('/', (req, res) => {
    res.end('welcome to express.js');
});
server.put('/', (req, res) => {
    res.status(400).json({message: 'put method call'});
});
server.patch('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./abc.txt'));
});
server.delete('/', (req, res) => {
    res.sendStatus(201);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});














