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


// const express = require('express');
// const app = express();
// const port = 3000;
// const morgan = require('morgan');
// const path = require('path');

//  //middleware
// let myFun = (req, res, next) => {
//     // console.log(req.query);

//     if ((req.query.age) >= 18){
//         next();
//     }else{
//         res.send('Sorry! you have under below 18');
//     }
// };

// // app.use(express.json());     // built - in 
// // app.use(express.urlencoded({extended: true}));     // built - in 
// app.use('/hello',express.static(path.join(__dirname, 'public','teamwork.png')));  // built - in 

// app.use(morgan('dev'));

// app.get('/',myFun,(req, res) => {
//     res.send('about');
// });

// // app.use(express.static(path.join(__dirname, 'public')));   // if this is open than do open also img src in index.html file 
// // app.get('/page', (req, res) => {
// //     // Read the HTML file
// //     const htmlPath = path.join(__dirname, 'public', 'index.html');
// //     res.sendFile(htmlPath);
// // });

// app.post('/',(req, res) => {
//     console.log(req.body);
//     res.send('post method');
// });

// app.listen(port, () => {
//     console.log('Server running at http://localhost:3000');
// });



// --------------DATE :- 28-02-2024----------------


const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const Products = require('./public/products.json');

// console.log(products);
//Middleware
app.use(express.json());
app.use(morgan('dev'));

//End-points - CRUD
app.post('/products', (req,res)=>{
    //console.log(req.body);
    const product = req.body;
    Products.push(product);
    //products.push({...req.body});
    res.status(201).json({message: 'Product is Added...'})
}); 

app.get('/products', (req,res)=>{
    res.status(200).json(Products);
});

app.get('/products/single-product', (req,res)=>{            //query params
    const id = +req.query.id;
    console.log(id);
    let product = Products.find((item)=> item.id ===id)
    res.status(200).json(product);
});


app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});