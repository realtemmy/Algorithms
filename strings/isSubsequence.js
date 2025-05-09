const isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < t.length && j < s.length; i++) {
    if (s[j] === t[i]) {
      ++j;
    }
  }
  // When j = length, it means the comparison completed and it matches
  return j === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("ace", "abcde"));
