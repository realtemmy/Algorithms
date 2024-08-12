// ===== Brute force ==========

const repeatedCharacter = function (s) {
  const repeatedMap = {};
  for (let i = 0; i < s.length; i++) {
    const letterExists = repeatedMap[s[i]];
    if (letterExists >= 0) {
      console.log("exists: ", letterExists);
      console.log("Map: ", repeatedMap);
      return s[i];
    } else {
      // console.log(s[i]);
      repeatedMap[s[i]] = 1;
    }
  }
  
};

// time O(n)
// space O(n)

console.log(repeatedCharacter("abccbaaac2"));
