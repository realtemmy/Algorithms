const noRepeat = function (s) {
  let maxLen = 0,
    start = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      start = i;
    } else {
        set.add(s[i]);
        maxLen = Math.max(maxLen, i - start + 1);
    }
  }
  
  return maxLen;
};

console.log(noRepeat("aabccbb"));
console.log(noRepeat("abbbb"));
console.log(noRepeat("abccde"));


