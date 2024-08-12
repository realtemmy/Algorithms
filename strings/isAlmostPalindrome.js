const isAlmostPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/, "").toLowerCase();
  let left = 0,
    right = s.length - 1;
  let once = 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      if (once < 1) {
        return false;
      }

      if (s[left] === s[right - 1]) {
        // continue by reducing right to right - 1
        right--;
        once--;
      } else if (s[left + 1] === s[right]) {
        left++;
        once--;
      } else {
        return false;
      }
    }

    left++;
    right--;
  }

  return true;
};

// time - O(n), space - O(1)

// console.log(isAlmostPalindrome("abcdefdba"));
console.log(isAlmostPalindrome("abccdba"));
// console.log(isAlmostPalindrome("raceacar"));
// console.log(isAlmostPalindrome("abccdba"));
// console.log(isAlmostPalindrome("a"));
// console.log(isAlmostPalindrome("ab"));

// race a car  -- rac a ecar;
// "raceacar" - true
// "abccdba" - true
// "abcdefdba" - false
// "" || "a" - true
// "ab" - true
