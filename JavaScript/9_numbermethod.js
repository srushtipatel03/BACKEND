//  ==>||    Number Methods   || <==


/* 
    1.> toString()             ==>     Returns a number as a string
    2.> toExponential ()       ==>     Returns a number written in exponential notation
    3.> toFixed()              ==>     Returns a number written with a number of decimals
    4.> toPrecision()          ==>     Returns a number written with a specified length
    5.> Valueof ()             ==>     Returns a number as a number
*/


// 1.> toString() 
// let data = 123;
// console.log(data.toString());
// console.log(data.valueOf());

// 2.> toExponential () 
// let data = 1.2364729293;
// console.log(data.toExponential());
// console.log(data.toExponential(2));
// console.log(data.toExponential(4));
// console.log(data.toExponential(6));

// 3.> toFixed()
// let data = 9.664729293;
// console.log(data.toFixed());
// console.log(data.toFixed(2));
// console.log(data.toFixed(4));
// console.log(data.toFixed(6));

// 4.> toPrecision()
// let data = 9.664729293;
// console.log(data.toPrecision());
// console.log(data.toPrecision(2));
// console.log(data.toPrecision(4));
// console.log(data.toPrecision(6));

// 5.> Valueof ()
// let data = 123;
// console.log(data.valueOf());



//  ==>||    Converting Variable to Numbers    || <==
/*
 1.> Number()
 2.> parseFloat ()
 3.> parseInt()
*/

//  1.> Number()
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("  10"));
// console.log(Number("10  "));
// console.log(Number(" 10  "));
// console.log(Number("10.33"));
// console.log(Number("10,33"));
// console.log(Number("10 33"));
// console.log(Number("John"));

// 2.> parseInt()
// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));

// 3.> parseFloat()
// console.log(parseFloat("10"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 20 30"));
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));


//  ==>||    Number Object Method    || <==
/* 
1.> Number.isInteger()          ==> Returns true if the argument is an integer
2.> Number.isSafeInteger()      ==> Returns true if the argument is a safe integer
3.> Number.parseFlaot()         ==> Convert a string to a number
4.> Number.parseInt()           ==> Convert a string to a whole number
*/

//  1.> Number.isInteger()
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));

//  2.> Number.isSafeInteger() 
// console.log(Number.isSafeInteger(10));
// console.log(Number.isSafeInteger(12345678901234567890));

//  3.> Number.parseFlaot()
// console.log(Number.parseFloat("10"));
// console.log(Number.parseFloat("10.33"));
// console.log(Number.parseFloat("10 20 30"));
// console.log(Number.parseFloat("10 years"));
// console.log(Number.parseFloat("years 10"));

//  4.> Number.parseInt()
// console.log(Number.parseInt("-10"));
// console.log(Number.parseInt("-10.33"));
// console.log(Number.parseInt("10"));
// console.log(Number.parseInt("10.33"));
// console.log(Number.parseInt("10 6"));
// console.log(Number.parseInt("10 years"));
// console.log(Number.parseInt("years 10"));