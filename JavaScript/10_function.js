// Function


// Hello(); // functio call

// function Hello()   // function define
// {
//     console.log('Hello Surat How Are You');
// }


// function Add(a,b)
// {
//     console.log(a*b);
// }


// Add(10,'Hello');

// function Product(a,b,c)
// {
//     return a*b*c;
// }

// let x = Product(10,20,30);
// console.log(x);    // output ->  6000

// console.log(Product(1,20,5));       // output ->  100



// function as Variable /anonymous Function
// const Product = Function (x,y,z)
// {
//     return x*y*z ;
// }

// console.log(Product(11,22,33));

// let skill = Function()
// {
//     console.log('JavaSript - is most popular language');
// };
// skill();

// // Self-invoking Function
// // (function()
// // {
// //     let x ="Hello Surat How Are You";
// //     console.log(x);
// // })();


// //  Function Rest Parameters:-
// // function s(...args) {
// //     let s = 0 ;
// //     for ( let arg of args) s += arg;
// //     return s;
// //     }
// //     let x = s(1,2,3,4,5 );
// //     console.log(x);


// // argument Object
// // x = s(1, 2, 3, 4, 5,5);
// // function s() {
// //     let s = 0;
// //     for (let i = 0; i < arguments.length; i++)
// // {
// // s += arguments[i];
// // }   
// // return s;
// // }
// // console.log(x);

// z
// // Generator Function
// // function* hello(x,y){
// //     yield x+y ;
// //     yield x-y ;
// //     yield x*y ;
// //     return x/y;
// // }
// // let x = hello(15,5);

// // console.log(x.next().value)vdtrs
// // console.log(x.next().value)
// // console.log(x.next().value)
// // console.log(x.next().value)
// ////////////////////////////////////////

// // this keyword

// // let cricketer = {
// //     firstName: "Virat",
// //     lastName: "Kohli",
// //     nationality: "Indian",
// //     fullName: function(){
// //         return this.firstName + " " + this.lastName + "\n " + this.nationality;
// //     }
// // }
// // console.log(cricketer.fullName());

// ///////////////////////////////////////////
// // call Method
// // let persone = {
// //     fullName: function (nationality){
// //         return this.firstName + " " + this.lastName + "\n " + nationality;
// //     }
// // }

// // let cricketer = {
// //     firstName: "Hardik",
// //     lastName: "Pandya",
// // };

// // let Batsman = {
// //     firstName: "MS",
// //     lastName: "Dhoni",
// // };

// // console.log(persone.fullName.call(cricketer, "Indian\n" ) );
// // console.log(persone.fullName.call(Batsman, "Indian" ) );

// /////////////////////////////////////////////////////////////////////

// // apply() Method:-

// // let persone = {
// //     fullName: function (nationality){
// //         return this.firstName + " " + this.lastName + "\n " + nationality;
// //     }
// // }

// // let cricketer = {
// //     firstName: "Axar",
// //     lastName: "Patel",
// // };

// // let Batsman = {
// //     firstName: "KL",
// //     lastName: "Rahul",
// // };

// // console.log(persone.fullName.call(cricketer, ["Indian\n"] ) );
// // console.log(persone.fullName.call(Batsman, ["Indian"] ) );

// ///////////////////////////////////////////////

// // bind Method
// let persone = {
//     firstName: "Jasprit",
//     lastName: "Bumrah",
//     fullName: function(city){
//         return this.firstName + " " + this.lastName + "\n " + city;
//     },
//         };

//         let Batsman = {
//                 firstName: "Shubhman",
//                 lastName: "Gill",
//             };

//             console.log(persone.fullName("Ahemdabad"));
//             let a = persone.fullName.bind(Batsman,"Panjab")();
//             console.log(a);

