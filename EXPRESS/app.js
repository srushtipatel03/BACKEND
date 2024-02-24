const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

//middleware
let myFun = (req, res, next) => {
    // console.log(req.query);

    if ((req.query.age) >= 18){
        next();
    }else{
        res.send('Sorry! you have under below 18');
    }
};

// app.use(myFun);      //Application level middleware
// app.use(express.json());    // built-in level middleware
app.use(morgan('dev'));

app.get('/',myFun,(req, res) => {
    res.send('welcome to Express.js');
});
app.post('/', (req, res) => {
    res.send('post method');
});

app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});