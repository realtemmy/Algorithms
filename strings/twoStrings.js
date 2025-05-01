// Given two strings, determine if they share a common substring. A substring may be as small as one character.

const twoStrings = function (s1, s2) {
  const wordSet = new Set(s1);

  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (wordSet.has(letter)) {
      return "YES";
    }
  }
  return "NO";
};

console.log(twoStrings("hello", "world"));
