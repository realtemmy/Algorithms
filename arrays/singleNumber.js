// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = function (nums) {
  // we can use XOR to check the first number with every other number.
  // XOR - of same number = 0, of 0 and another number = number
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // check res with all other number
    res = res ^ nums[i];
  }
  return res;
};

// console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));