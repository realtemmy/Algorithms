// Given an integer array nums and an integer k, return true if there are two distinct
//  indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// ==== Fails test case 52/58
// var containsNearbyDuplicate = function (nums, k) {
//   if (k < 1) {
//     return false;
//   }
//   let start = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (Math.abs(i - start) > k) {
//       start++;
//     }
//     if (Math.abs(i - start) <= k && nums[i] === nums[start]) {
//       return true;
//     }
//   }
//   return false;
// };

const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let j = map.get(nums[i]);
      if (i - j <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //false
console.log(containsNearbyDuplicate([1, 2, 1], 0)); //false
console.log(containsNearbyDuplicate([0, 1, 2, 3, 2, 5], 3));
