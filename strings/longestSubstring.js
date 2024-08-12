// const longestSubstring = (string) => {
//   if (string.length <= 1) return s.length;
//   let maxCount = 1;
//   for (let i = 0; i < string.length; i++) {
//     let uniqueCount = 1;
//     let checked = [];
//     for (let j = i + 1; j < string.length; j++) {
//       if (string[i] !== string[j] && checked.indexOf(string[j]) === -1) {
//         uniqueCount++;
//         checked.push(string[j]);
//         maxCount = Math.max(maxCount, uniqueCount);
//       } else {
//         break;
//       }
//     }
//   }
//   return maxCount;
// };

// time - O(n^3), space - O(n)

// ====== OPTIMIZED ========== //
const longestSubstring = (s) => {
  if (s.length <= 1) return s.length;
  let left = 0,
    maxCount = 0,
    seen = {};

  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];
    let prevSeenChar = seen[currentChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    seen[currentChar] = right;
    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
};

console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("abcbdaac"));
// time - O(n), space - O(n);
