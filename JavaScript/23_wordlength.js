
function wordcount(word) { 

    let count=0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !==0 ) {
          count++;
        }
      }
      document.getElementById('result').textContent = 'Word Count: ' + count;
      return count;
}