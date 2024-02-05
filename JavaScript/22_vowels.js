/*
    1. calculator
    2. digital clock / counter
    3. word length counter
    4. vowel character counter
    5. random string generator
    6. to-do list
    7. budget app 
*/
function countVowel(str) { 
    let count = 0;

    for (const char of str) {
        if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U" || char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    
    document.getElementById('result').textContent = 'Vowel Count: ' + count;
    return count;
}