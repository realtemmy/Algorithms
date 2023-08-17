// The goal of this exercise is to convert a string to a new string where each character in the new string is
// "(" if that character appears only once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  let splitWord = word.split("");
  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord.count(splitWord[i]) > 1) {
      splitWord[i] = ")";
    } else {
      splitWord[i] = "(";
    }
    // splitWord.count()
  }
  return splitWord.join("");
}

console.log(duplicateEncode("recede"));
