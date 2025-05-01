const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let matches = "";

  //   Put the longest word in a set
  const wordMap = new Set(strs[0]);

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    let prefix = "";
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (wordMap.has(letter)) {
        prefix += letter;
      }
      console.log(prefix);
    }
    if (prefix.length < matches.length) {
      matches = prefix;
    }
  }

  return matches;
};

// console.log(longestCommonPrefix(["flower", "flight", "flow"])); // "fl" O(n2)
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
// console.log(longestCommonPrefix(["car", "car", "car"])); // "car"
