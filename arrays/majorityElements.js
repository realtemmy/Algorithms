// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (nums) {
  // since answer will appear more than n/2 times, then the value of n/2 after being sorted should be the answer
  nums.sort();

  return nums[Math.floor((nums.length - 1) / 2)];
};

console.log(majorityElement([3, 2, 3]));
