// Give an integer x, return true if is a palindrome and false otherwise
// eg --> 121(true), -121 -> (false), 10 ->false

// constraints: Could you solve without converting the integer to a string

/* =============
    Brute force
================ */
const isPalindrome = (x) => {
  x = x.toString();
  const word = x.split("");
  //   const reversedWord = word.reverse();
  const reversedWord = [];
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord.push(word[i]);
  }
  console.log("word: ", word);
  console.log("reversedWord: ", reversedWord);
  if (word.join('') === reversedWord.join('')) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(-121));
