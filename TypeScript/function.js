/*---FUNCTION---*/
// function add(a: number, b: number) : number 
// {
//     return a + b;
// }
// console.log(add(2,5));
// // console.log(add(2,'5')); // output:- 25 
/*---INTERFACE---*/
// interface hello{            
//     name : string
//     email ?: string         // ? : optional type
//     age : number
// }
// let person : hello = {
//     name: 'Raghav',
//     age: 25
//     // job: 'developer'
// }
// console.log(person);
/*---ENUM---*/
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var x = gender.male;
console.log(x);
