const wordPattern = function (pattern, s) {
  // store pattern as key and s as value
  let string = s.split(" ");
  if (string.length !== pattern.length) {
    return false;
  }
  let map1 = new Map(), map2 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (map1.has(pattern[i])) {
      if (map1.get(pattern[i]) !== string[i]) {
        return false;
      }
    } else {
      map1.set(pattern[i], string[i]);
    }

    if(map2.has(string[i]) && map2.get(string[i]) !== pattern[i]){
        return false
    }else{
        map2.set(string[i], pattern[i])
    }
  }

  return true;
};


// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("abba", "dog dog dog dog")); //false

// Input: pattern = "abba", s = "dog cat cat dog" -- true
// Input: pattern = "abba", s = "dog cat cat fish" -- false
// Input: pattern = "aaaa", s = "dog cat cat dog"
