const isAnagram = function (s, t) {
  //   ====== First approach ====== //
  // store letter and freq in a map
  // then loop the t and reduce for every element found in t thats in s

  //   another way would be to sort and compare sha
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // increment freq by 1
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    // reduce for every char in map, and if doesn't match, return false
    if (!map.has(t[i])) {
      return false;
    }

    let value = map.get(t[i]) - 1;
    if (value < 1) {
      map.delete(t[i]);
    } else {
      map.set(t[i], value);
    }
  }
  return true;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("car", "rat"));
// console.log(isAnagram("ab", "ba"));
console.log(isAnagram("aacc", "ccac"));

// "anagram" - "nagaram" -- true
