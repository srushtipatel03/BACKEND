// Synchronously and Asynchronously method

// Asyncronous Method
// const fs = require("fs");
// fs.open('../abc.txt',(err,data)=>{
//     if(err){
//         console.log('Failed to open File');
//     }else 
//     console.log('File open Sucessfully');
// })

// second async method --- directly creates a new file 
// var fs = require('fs');
// fs.open('abc2.txt','w',(err,file)=>{
//     if(err)
//         console.log('saved!');
// });


// Syncronous Method
const fs = require("fs");
fs.openSync('abc3.txt','w');
console.log('File open Sucessfully');