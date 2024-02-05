// Array methodes

// 1.> length of array
// const a=[11,22,33,44,55,66,77,88,99];
// console.log("Length of Array is :- ",a);

// 2.> array push    ==> add element of last position
// const a = [11,22,33,44,55];
// a.push(111,222);
// console.log(a);

// 2.> array pop   ==> delet element of last position
// const a = [11,22,33,44,55];
// a.pop();
// console.log(a);

// 3.> Array unShift:- ==> add element of frist position
// const a = [11,22,33,44,55];
// a.unshift(111,222);
// console.log(a);

// 4.> Array Shift:-  ==> delet element of frist position
// const a = [11,22,33,44,55];
// a.shift();
// console.log(a);

// 5.>  Array Merging(Concatenating):-   ==>  murge array
// const bat = ['Gill','Rohit','kohli','Surya','Rinku','KL Rahul'];
// const bow = ['Hardik','Jadeja','Kuldeep','Siraj','Shami'];
// const all = bat.concat(bow);
// console.log(all);

// 6.>  Array splice   ==>add element of any position in array
// const bat = ['Gill','Rohit','kohli','Surya','Rinku','KL Rahul'];
// bat.splice(3,0,"MS Dhoni","Hardik");
// console.log(bat);

// 7.>  Array slice   ==> Delete element of any position in array
// const bat = ['Gill','Rohit','kohli','Surya','Rinku','KL Rahul'];
// const team = bat.slice(1,3);
// console.log(bat);
// console.log(team);

// 8.> Array sort  ==> sorting Element
// const alfa = ['c','d','e','a','b'];
// alfa.sort();
// console.log(alfa);

// 9.> Array Reverce  ==> sorting Element
// const alfa = ['c','d','e','a','b'];
// alfa.sort();
// console.log(alfa.reverse());

let data = [11,22,33,44,55,66,77,88,99];

// 13.>  Array Max ():-  ==> find the array in Highet(Big)Number.
// MaxNum = (a) =>{
// return Math.max.apply(null,a);
// };
// console.log(MaxNum(data))

// 14.>  Array Min ():-  ==> find the array in lowest (Small) Number.
// MinNum = (a) =>{
// return Math.min.apply(null,a)
// };
// console.log(MinNum(data))

// 15.> Array forEach ():- ==> 
// let a = "";
// data.forEach((val, index)=>{
// a = a +" " + val;
// })
// console.log(a);

// 16.> Array Map ():-   ==>  5 * 2 =10
// let a = [];
// a = data.map((val, index)=>{
// return val - 5
// })
// console.log(a);

// 17.> Array filter ():-
// let a = [];
//  a = data.filter((val, index)=>{ 
// return val < 33;
// })
// console.log(a);

// 18.> Array reduse ():-
// let abc;
// abc = data.reduceRight((a,val, index)=>{
// return a + val;
//  })
// console.log(abc);

// 20.> Array some():-
//  let abc;
//  abc = data.some((val, index)=>{
//  return val < 25
// })
// console.log(abc);

// 21.> Array every():-
//  let abc;
//  abc = data.every((val, index)=>{
//  return val >= 25
// })
// console.log(abc);

// 22.> Array find():-
//  let abc;
//  abc = data.find((val, index)=>{
//  return val >= 25
// })
// console.log(abc);

// 23.> Array findIndex():-
// let abc;
//  abc = data.findIndex((val, index)=>{
//  return val >= 25
// })
// console.log(abc);

// 24.> Array entries():-
// let abc;
// abc = data.entries();
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);

// 25.> Array includes():-
// let abc;
// abc = data.includes(11); // is true
// console.log(abc);

// 26.> Array copyWithin():-
// console.log(data.copyWithin(0,4,7));
// console.log(data.copyWithin(1,5));