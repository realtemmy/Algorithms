// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

const minSubArrayLen = function (target, nums) {
  let minLen = Infinity,
    start = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      let distance = i - start + 1;
      minLen = Math.min(minLen, distance);
      sum -= nums[start];
      start++;
    }
  }
  if (minLen === Infinity) {
    return 0;
  }
  return minLen;
};

// Follow up: If you have figured out the O(n) solution, try coding another solution of
// which the time complexity is O(n log(n)).
// 1 2 2 3 3 4

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); //0
