const express = require('express');
const server = express();
const path = require('path');
const ejs = require('ejs');

server.set("view engine", "hbs");
// server.set("view engine", "ejs");

server.get('/student', (req, res)=>{
    let data = {
        name: 'srushti sojitra',
        course: 'back-end developer',
        age: 20,
        hobbies: ['music', 'travelling']
    }
    res.render('student', data);
});

server.listen(4321, ()=>{
    console.log(`server start at http://localhost:4321`);
})