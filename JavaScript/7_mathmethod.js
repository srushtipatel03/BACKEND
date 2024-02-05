//  Math Properties(Constants):- 

//   1.> Math.E                 5.> Math.LN2
//   2.> Math.PI                6.> Math.LN10
//   3.> Math.SQRT2             7.> Math.LOG2E    
//   4.> Math.SQRT1_2           8.> Math.LOG10E  


//  1.> Math.E                            // returns Euler's number
//console.log(Math.E);                    // 2.718281828459045

//  2.> Math.PI                          // returns PI
//console.log(Math.PI);                  // 3.141592653589978

//  3.> Math.SQRT2                        // returns the square root of 2
// console.log(Math.SQRT2);               // 1.4142135623730951

//  4.> Math.SQRT1_2                      // returns the square root of 1/2
// console.log(Math.SQRT1_2);             // 0.7071067811865476

//  5.> Math.LN2                         // returns the natural logarithm of 2
// console.log(Math.LN2);                // 0.6931471805599453

//  6.> Math.LN10                        // returns the natural logarithm of 10
// console.log(Math.LN10);               // 2.302585092994046

//  7.>  Math.LOG2E                    // returns base 2 logarithm of E
// console.log(Math.LOG2E);            // 1.4426950408889634

//  8.> Math.LOG10E                  // returns base 10 logarithm of E
// console.log(Math.LOG10E);            // 0.4342944819032518

// Math Methods

//   1.>  Math.round()         6.>  Math.pow()      11.>  Math.random()     16.>  Math.log10()
//   2.>  Math.ceil()          7.>  Math.sqrt()     12.>  Math.sin()       
//   3.>  Math.floor()         8.>  Math.abs()      13.>  Math.cos()      
//   4.>  Math.trunc()         9.>  Math.min()      14.>  Math.log()      
//   5.>  Math.sign()         10.>  Math.max()      15.>  Math.log2()


// 1 --> Math.round()      ==> Return the nearest integer
// console.log(Math.round(0.9));   // 1  big
// console.log(Math.round(6.7));   // 7  big
// console.log(Math.round(2.3));   // 2  small

// 2 --> Math.ceil()      ==> returns the value of x rounded up to its nearest integer.
// console.log(Math.ceil(0.9));    // 1  big
// console.log(Math.ceil(6.2));    // 7  big
// console.log(Math.ceil(-2.3));   // -2  small

// 3 --> Math.floor()      ==> returns the value of x rounded down to its nearest integer.
// console.log(Math.floor(0.9));    // 0 small
// console.log(Math.floor(6.2));    // 6 small
// console.log(Math.floor(-2.3));   // -3  small

// 4 --> Math.trunc()      ==> returns the integer part of X .
// console.log(Math.trunc(6.9));    // 6 
// console.log(Math.trunc(6.2));    // 6 
// console.log(Math.trunc(-2.3));   // -2 

// 5 --> Math.sign()      ==> returns if x is negative, null or positiv.
// console.log(Math.sign(-2));     //  -1
// console.log(Math.sign(0));     //   0
// console.log(Math.sign(5));     //   1

// 6 --> Math.pow()      ==> returns the value of x to the power of y.
// console.log(Math.pow(6,2));    // 36 
// console.log(Math.pow(5,3));    // 125 
// console.log(Math.pow(-2,2));   // 4

// 7 --> Math.sqrt()      ==> returns the square root of x.
// console.log(Math.sqrt(121));    // 11 
// console.log(Math.sqrt(64));    // 8 
// console.log(Math.sqrt(-2));   // NaN 

// 8 --> Math.abs()      ==> Math.abs(x) returns the absolute (positive) value of x.
// console.log(Math.abs(6));       // 6 
// console.log(Math.abs(11.2));    // 11.2
// console.log(Math.abs(-2.3));    // 2.3 

// 9 --> Math.min()      ==> find the lowest value 
// console.log(Math.min(6.9,66,99,3,7,70));         // 3 
// console.log(Math.min(-6.2,-1,-24,12,0,-4.4));    // -24 
// console.log(Math.min(55,88,0,5,1,99));           // 0

// 10 --> Math.max()      ==> find the highest value 
// console.log(Math.max(6.9,66,3.5,9,-22));        // 66
// console.log(Math.max(0,2,88,55.5,-2,90));       // 90 
// console.log(Math.max(-2.3,53,78,99,-11,-99));   // 99

// 11 --> Math.random()      ==> returns a random number between 0 (inclusive), and 1 (exclusive).
// console.log(Math.random());    // 0.6182999706368253

// 12 --> Math.sin()      
// ==> Angle in radians = Angle in degrees * PI / 180. 
// console.log(Math.sin(90*Math.PI / 180));    // 1
// console.log(Math.sin(30*Math.PI / 180));    // 0.4
// console.log(Math.sin(60*Math.PI / 180));    // 0.8

// 13 --> Math.cos()     
//  ==> Angle in radians = Angle in degrees * PI / 180. 
// console.log(Math.cos(0*Math.PI / 180));     // 1
// console.log(Math.cos(60*Math.PI / 180));    // 0.50 
// console.log(Math.cos(90*Math.PI / 180));    // 6.12

// 14 --> Math.log()     
// console.log(Math.log(1));       // 0
// console.log(Math.log(-5));      // NaN
// console.log(Math.log(56));      // 4.02535169073515

// 15 --> Math.log2()     
// console.log(Math.log2(1));       // 0
// console.log(Math.log2(8));       // 3
// console.log(Math.log2(56));      // 5.807354922057604

// 16 --> Math.log10()    
// console.log(Math.log10(10000));        // 4 
// console.log(Math.log10(1000));         // 3
// console.log(Math.log10(100));          // 2
// console.log(Math.log10(10));           // 1
// console.log(Math.log10(1));            // 0