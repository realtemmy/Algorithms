// Given a string s, return the longest palindromic substring in s.

// time - O(N^3), space - O(1)
const longestPalindrome = function (s) {
  let maxCount = 0;
  let longestString = "";
  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // check if current substring is a palindrome
      //   ba
      if (j - i + 1 > maxCount && isPalindrome(i, j)) {
        maxCount = Math.max(maxCount, j - i + 1);
        longestString = s.substring(i, j + 1);
      }
    }
  }
//   console.log(maxCount)
  return longestString;
};

// console.log(longestPalindrome("babad")); //bab
console.log(longestPalindrome("cbbd")); //a
// cbbd - bb
