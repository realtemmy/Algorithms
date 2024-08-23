var minOperations = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      console.log(nums[i]);
      count++;
    }
  }
  return count;
};

console.log(minOperations([2, 11, 10, 1, 3], 10));
