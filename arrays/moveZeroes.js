// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the
// non-zero elements.
// Note that you must do this in-place without making a copy of the array.

const moveZeroes = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    } else {
      let hold = nums[start]; // always zero;
      nums[start] = nums[i];
      nums[i] = hold;
      start++;
    }
  }
  return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
