// object and class

// let person ={
//     ang: 25,
//     greet: function(){
//         return ("Hello good morning");
//     }
// };

// person.name = "sikll";    //add to property
// person.nationaltiy = "Indian"

// console.log(person);
// console.log(person.age);
// console.log(greet.greet());

// delete person.age;
// console.log(person);


// // Object access property
// console.log(person.age);
// console.log(person["age"])

// let person = {
//     name: "jenil",
//     age: 19,
//     marks:{
//         maths: 45,
//         sci: 39,
//         eng: 49
//     },
//     hobbies: ["reading", "dancing", "photograpy"]
// };

// console.log(person)
// console.log(person.marks)
// console.log(person.marks,maths)
// console.log(person,hobbies[0])


// class Person{
//     constuctor(name, city){
//         this.name = name;
//         this.city = city;
//     }
//     greet(){
//         return ("Hello " + this.name +"\n lives in : " + this.city);
//     }
// }

// let jenil =// object and class

let person ={
    ang: 25,
    greet: function(){
        return ("Hello good morning");
    }
};

person.name = "sikll";    //add to property
person.nationaltiy = "Indian"

console.log(person);
console.log(person.age);
console.log(greet.greet());

delete person.age;
console.log(person);


// Object access property
console.log(person.age);
console.log(person["age"])

let person = {
    name: "krish",
    age: 19,
    marks:{
        maths: 33,
        sci: 35,
        eng: 47
    },
    hobbies: ["reading", "dancing", "photograpy"]
};

console.log(person)
console.log(person.marks)
console.log(person.marks,maths)
console.log(person,hobbies[0])


class Person{
    constuctor(name, city){
        this.name = name;
        this.city = city;
    }
    greet(){
        return ("Hello " + this.name +"\n lives in : " + this.city);
    }
}

let krish = new Person("KRISH", "Surat");
console.log(krish.greet());


//Template literal
let a = 30, b = 60;
//let data = "Hello good morning guys";
let data = `hello good morning
${a*b} ${b}`;
console.log(data);