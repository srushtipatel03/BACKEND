// 1.  print 10-1
// 2.  print 51-99
// 3.  enter n print 1 to n
// 4.  enter n print n to 1
// 5.  enter n print -n to n
// 6.  print odd no. up to n
// 7.  print even no. up to n
// 8.  1,4,9,16,.....,n
// 9.  1,4,3,16,5,...,n
// 10. 1,2,4,8,16,...,n
// 11. 1,4,12,32,80,...,n
// 12. total 1,2,....10 = 55
// 13. total odd 1,3,5
// 14. total even 2,4,6


//1.  print 10-1
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// 2.  print 51-99
// for(let i=51; i<100; i++){
//     console.log(i);
// }

// 3.  enter n print 1 to n
// let n= Number(prompt("enter the number: "));
// for(let i=1; i<n; i++){
//        console.log(i);
//    }

// 4.  enter n print n to 1
// let n= Number(prompt("enter the number: "));
// for(let i=n; i>=1; i--){
//        console.log(i);
//    }

// 5.  enter n print -n to n
// let n= Number(prompt("enter the number: "));
//  for(let i=-n; i<=n; i++){
//         console.log(i);
//     }

// 6.  print odd no. up to n
// let n= Number(prompt("enter the number: "));
// let sum=0;
//  for(let i=1; i<=n; i++){
//     if(i%2==1)
//         console.log(i);
//     }

// 7.  print even no. up to n
// let n= Number(prompt("enter the number: "));
// let sum=0;
//  for(let i=1; i<=n; i++){
//     if(i%2==0)
//         console.log(i);
//     }

// 8.  1,4,9,16,.....,n
// let n = Number(prompt("Enter the n value :-"));
// let sum=0;
// for(let i=1;i<=n;i++)
// {
//     if(i%2==1)
//     {
//         sum=sum+i;
//     }
//  console.log(sum);
// }

// 9.  1,4,3,16,5,...,n
// let n= Number(prompt("enter the number: "));
// let sum=0;
//  for(let i=1; i<=n; i++){
//       if(i%2==1){
//          sum=sum+i;
//       }
//           console.log(sum);
//       }

// 11. 1,4,12,32,80,...,n
// let n= Number(prompt("enter the number: "));
// let a=1, j, i=1;
// console.log(a);
//  for(let j=1; j<=n; j++){
//      i=i*2;
//      a=a*2+i;
//      console.log(a);
//         }

// 12. total 1,2,....10 = 55
// let n= Number(prompt("enter the number: "));
// let a=1, sum=0;
//  for(let i=1; i<=10; i++){
//      sum=sum+a;
//      a++;
//      console.log(sum);
// }

// 13. total odd 1,3,5       
// let sum = 0;
// let n = Number(prompt("Enter the n value :-"));
//  for (let i = 1; i <= n; i++)
//  {
//      console.log(i);
//      sum += i;      
//      i++;
//  }
//      console.log("Odd Sum Total is : ",sum);

// 14. total even 2,4,6
let sum = 0;
let n = Number(prompt("Enter the n value :-"));
 for (let i = 0; i <= n; i++)
 {
     console.log(i);
     sum += i;      
     i++;
 }
     console.log("even Sum Total is : ",sum);