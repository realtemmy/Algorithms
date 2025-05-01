// 1071. Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

var gcdOfStrings = function (str1, str2) {
  let gcd = "";
  let minLength = Math.min(str1, str2);
  let count = 0;

  while (count < minLength) {
    if (str1[count] === str2[count]) {
      gcd += str1[count];
      count++;
    } else {
      return gcd
    }
  }

  return gcd;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
