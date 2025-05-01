// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

var mergeAlternately = function (word1, word2) {
  let merged = "";
  let count = 0;
  let maxLength = Math.max(word1.length, word2.length);
  while (count < maxLength) {
    if (word1[count]) {
      merged += word1[count];
    }
    if (word2[count]) {
      merged += word2[count];
    }
    count++
  }

  return merged
};

console.log(mergeAlternately("abc", "pqr"))
