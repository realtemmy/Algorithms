// Write a function that reverses a string in place with a O(1) space memory

const reverseString = function (s) {
  let left = 0;
  right = s.length - 1;
  while (left < right) {
    let hold = s[left];
    s[left] = s[right];
    s[right] = hold;
    left++
    right--
  }
  console.log(s)
};
reverseString(["h", "e", "l", "l", "o"])
