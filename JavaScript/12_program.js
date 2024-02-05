// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

// const rev= [1,5,4,3,8];
// console.log(rev.reverse());


// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function sortStringAlphabetically(str) {
//     return str.split('').sort().join('');
//   }
//   const inputString = 'webmaster';
//   const sortedString = sortStringAlphabetically(inputString);
//   console.log(sortedString);
  

// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// function capitalizeFirstLetter(str) {
//     let words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     let capitalizedString = words.join(' ');
//     return capitalizedString;
//   }

//   let inputString = 'the quick brown fox';
//   let outputString = capitalizeFirstLetter(inputString);
//   console.log(outputString); 
  

// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
  
//     return longestWord;
//   }
//   let sentence = 'Web Development Tutorial';
//   let longest = findLongestWord(sentence);
//   console.log(longest); // Output: 'Development'

// 5. Write a JavaScript function that checks whether a number is perfect.

function isPerfectNumber(number) {
    let sum = 0;
    
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    
    return sum === number;
  }
  console.log(isPerfectNumber(6)); // Output: true
  console.log(isPerfectNumber(28)); // Output: true
  console.log(isPerfectNumber(12)); // Output: false
z
  
