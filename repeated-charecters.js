const repeatedCharacter = function (s) {
  const repeatedMap = {};
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    // if (s[i] === s[i + 1]) {
    //   return s[i];
    // }
    const letterExists = repeatedMap[s[i]];
    if (letterExists >= 0) {
        console.log(letterExists);
      return s[i];
    } else {
    //   console.log(s[i]);
      repeatedMap[s[i]] = 1;
    }
  }
};

console.log(repeatedCharacter("abccbaaac2"));
