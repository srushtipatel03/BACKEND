const http = require("http");
const fs = require("fs");
// const data = fs.readFileSync('./hello.json', 'utf-8');   // open when switchcse running
const data = require('./hello.json');    //open when if else statement running
const port = 9090;
console.log(data);
const app = http.createServer();

// app.on("request", (req, res) => {
//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.write('<h3 style="color:blue" >welcome to NODEJS</h3>');
//             res.end();
//             break;
    
//         case '/product':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(data);
//             break;
    
//         case '/user':
//             res.setHeader('Content-Type', 'text/html');
//             res.write('<h3 style="color:green" >welcome to user page</h3>');
//             res.end();
//             break;
    
//         default:
//             res.setHeader('Content-Type', 'text/html');
//             res.write('<h3 style="color:red" >page not found</h3>');
//             res.end();
//             break;
//     }
// });

app.on('request',(req, res) => {
    console.log(req.url);             // close when swichcase running
    let item = req.url.split('/');
    console.log(item);

    if(item[1] === ''){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h3 style="color:blue" >welcome to NODEJS</h3>');
        res.end();
    }
    else if(item[1] === 'user'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h3 style="color:blue" >welcome to user page</h3>');
        res.end();
    }
    else if(item[1] === 'product'){
        res.setHeader('Content-Type', 'application/json');
        if(item.length === 3){
            let id = Number(item[2]);
            let product = data[id-1];
            res.end(JSON.stringify(product));
        }else
        res.end(JSON.stringify(data));
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<h3 style="color:red" >page not found</h3>');
        res.end();
    }
})

app.listen(port, () => {
    console.log('server start at port http://localhost:4567');
});

