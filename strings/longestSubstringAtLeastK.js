// Longest substring with at least K repeating characters
// Given a string s and an integer k, return the length of the longest substring of s such that the freq of each 
// character in this substring is greater than or equal to k
// const longestSubstring = function (s, k) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       // increment value
//       let prev = map.get(s[i]);
//       map.set(s[i], prev + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }
//   let sum = 0;
//   Array.from(map.values()).forEach((value) => {
//     console.log(value);

//     if (value >= k) {
//       sum += value;
//     }
//   });

//   //   OR
//   //   for (num of map) {
//   //     if (num[1] >= k) {
//   //       sum += num[1];
//   //     }
//   //   }
//   return sum;
// };

const longestSubstring2 = function(s, k){
  
}

// console.log(longestSubstring("aaabb", 3));
// console.log(longestSubstring("ababbc", 2));
console.log(longestSubstring("ababacb", 3));
