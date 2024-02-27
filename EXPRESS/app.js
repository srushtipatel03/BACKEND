// const express = require('express');
// const app = express();
// const port = 3000;
// const morgan = require('morgan');

// //middleware
// let myFun = (req, res, next) => {
//     // console.log(req.query);

//     if ((req.query.age) >= 18){
//         next();
//     }else{
//         res.send('Sorry! you have under below 18');
//     }
// };

// // app.use(myFun);      //Application level middleware
// // app.use(express.json());    // built-in level middleware
// app.use(morgan('dev'));

// app.get('/',myFun,(req, res) => {
//     res.send('welcome to Express.js');
// });
// app.post('/', (req, res) => {
//     res.send('post method');
// });

// app.listen(port, () => {
//     console.log('Server running at http://localhost:3000');
// });



// --------------DATE :- 27-02-2024----------------

const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');

 //middleware
let myFun = (req, res, next) => {
    // console.log(req.query);

    if ((req.query.age) >= 18){
        next();
    }else{
        res.send('Sorry! you have under below 18');
    }
};

// app.use(express.json());     // built - in 
// app.use(express.urlencoded({extended: true}));     // built - in 
app.use('/hello',express.static(path.join(__dirname, 'public','teamwork.png')));  // built - in 

app.use(morgan('dev'));

app.get('/',myFun,(req, res) => {
    res.send('about');
});

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/page', (req, res) => {
//     // Read the HTML file
//     const htmlPath = path.join(__dirname, 'public', 'index.html');
//     res.sendFile(htmlPath);
// });

app.post('/',(req, res) => {
    console.log(req.body);
    res.send('post method');
});

app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});
