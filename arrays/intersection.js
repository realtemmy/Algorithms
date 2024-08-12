// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.

const intersection = function (nums1, nums2) {
  const arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(nums1[i]);
        break;
      }
    }
  }
  return [...new Set(arr)];
};
// Time - O(N^2), Space - O(N)

// ========= OPTIMIZED ==========//
// create a hash map to store nums1, then iterate over nums2 to check
//  values are present in the hashmap
const intersection2 = (nums1, nums2) => {
  // OR convert both to sets, then loop through one to check if the other exists and push to a new array;
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const arr = [];
  for (num of set1) {
    if (set2.has(num)) {
      arr.push(num);
    }
  }
  return arr;
};

console.log(intersection2([1, 2, 2, 1], [2, 2]));
console.log(intersection2([4, 9, 5], [9, 4, 9, 8, 4]));
// [1,2,2,1], [2,2]

// nums1 = [4,9,5], nums2 = [9,4,9,8,4]
