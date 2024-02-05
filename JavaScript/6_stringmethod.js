// String method

/*

1. -> length                   7. -> UpperCase()             13. -> padStart()            
2. -> slice()                 8. -> LowerCase()             14. -> padEnd()
3. -> substring()             9. -> concat()                15. -> charAt()
4. -> substr()               10. -> trim()                  16. -> charCodeAt()
5. -> replace()              11. -> trimStart()             17. -> split()
6. -> replaceAll()           12. -> trimEnd()

*/

let data="JavaScript is the world`s most popular programming language.";

// 1.-> String length
// console.log(data.length);           //  60


// 2. -> slice()     
// console.log(data.slice(5,12));               //  cript i 
// console.log(data.slice(25));                // s most popular programming language.
// console.log(data.slice(-12,-3));           //  ing langua


// 3. -> substring() 
// console.log(data.substring(5,12));              //  cript i
// console.log(data.substring(25));             //  most popular programming language.
// console.log(data.substring(-12));            //  Java script is the wold`s most popular programming language.
// console.log(data.substring(-12,-5));         // counting to 0


// 4. -> substr()
// console.log(data.substr(5,12));              //  cript is the
// console.log(data.substr(-15,12));            //  mming langua


// 5. ->  UpperCase() 
// console.log(data.toUpperCase());   //  JAVASCRIPT IS THE WOLD`S MOST POPULAR PROGRAMMING LANGUAGE.


// 6. -> LowerCase() 
// console.log(data.toLowerCase());   //  javascript is the wold`s most popular programming language.


//  7. -> charAt()
//  console.log(data.charAt(0));           //  J


// 8. -> charCodeAt()
// console.log(data.charCodeAt(1));        //  74


// 9. -> concat() 
// console.log(data.concat("srushti","patel"));  // joint this word backSide srushti patel


// 10. -> replace()
// console.log(data.replace("wold","surat")); 


// 11. -> replaceAll()
// console.log(data.replaceAll("world","surat")); 


// 12. -> trim() 
// let txt="      srushti patel        "
// console.log(txt);
// console.log(txt.trim());     // remove space
// console.log("Length is :- "+(txt.trim()).length);


// 13.  -> trimStart() 
// let txt="     srushti patel       "
// console.log(txt);
// console.log(txt.trimStart());     // remove space from start
// console.log("Length is :- "+(txt.trimStart()).length);


// 14.  -> trimEnd() 
// let txt="      srushti patel        "
// console.log(txt);
// console.log(txt.trimEnd());     // remove space from end
// console.log("Length is :- "+(txt.trimEnd()).length);


// 15. -> pad start
// let txt="67890";
// console.log(txt.padStart(10,"#"));    // #####67890


// 16. -> pad End
// let txt="12345";
// console.log(txt.padEnd(10,"#"));    // 12345#####


// 17. -> split()
// let data="Java scri$pt is the wolrd`s most popular programming language.";
// console.log(data.split(" "));  // where change to string
// console.log(data.split(""));     // singel char 