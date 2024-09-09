const findMaxAverage = function (nums, k) {
  if (nums.length < 2) return nums[0];
  let maxNum = 0;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;
    // Add the next 4 elements
    for (let j = i; j < i + k; j++) {
      console.log(nums[j]);

      sum += nums[j];
    }
    maxNum = Math.max(maxNum, sum);
  }

  return maxNum / k;
};

// ========= Optimized ===========
// Does't work for large value of k correctly
const findMaxAverage2 = function (nums, k) {
  let maxNum = -Infinity;
  let sum = 0;
  start = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k) {
      // sutract the first number
      sum -= nums[start];
      start++;
    }
    maxNum = Math.max(maxNum, sum);
  }

  return maxNum / k;
};

const findMaxAverage3 = function (nums, k) {
  let sum = 0;
  let maxNum = 0;
  // First get the sum of all the numbers before k
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  // Add each k numbers after the kth position
  for (let i = k; i < nums.length; i++) {
    sum += nums[i];
    // remove the last element after shifting
    sum -= nums[i - k];
    maxNum = Math.max(maxNum, sum);
  }

  return maxNum / k;
};

const findMaxAverage4 = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // Initialize `maxNum` with the initial `sum`
  let maxNum = sum;

  // Start sliding the window
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // Update the sum by sliding the window
    maxNum = Math.max(maxNum, sum); // Update the maximum sum found
  }

  return maxNum / k;
};

console.log(findMaxAverage3([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([-1], 1));
console.log(findMaxAverage2([5], 1));
