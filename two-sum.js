// QUESTION: Given an array of integers, return the indices of the two numbers that add up to a given target;

// conditions: all numbers are positive, there are no duplicates, the might not always be a solution(return null),
// might have one or less than one value, can there be multiple pairs sthat add uo to the value(nope)

// two pointer technique!

const twoSums = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (numberToFind === nums[j]) {
        // console.log(i, j);
        return [i, j];
      }
    }
  }
  return null;
};

// console.log(twoSums([1, 3, 7, 9, 2], 11));
// time-> O(n^2)
// space -> O(1)

const twoSums2 = (nums, target) => {
  const complementMap = {}; // store the complement of each number
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementExists = complementMap[nums[i]];
    if (complement === 0 || complementExists) {
      return [complementMap[nums[i]], i];
    } else {
      // set complement and index in complementMap
      complementMap[complement] = i;
    }
  }
};


console.log(twoSums2([1, 3, 7, 9, 2], 11));
