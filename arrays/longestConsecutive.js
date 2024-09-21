// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// ======== Brute force time - O(2N) ==========
const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // let map = new Set(nums);

  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
    let j = i,
      count = 1;
    if (!map.has(nums[i] - 1)) {
      while (map.has(nums[j] + 1) || map.has(nums[j] + 1) === 0) {
        j = map.get(nums[j] + 1);
        count++;
        longest = Math.max(longest, count);
      }
    }
  }

  return longest;
};


// ========== Optimized time- O(N) ============
const longestConsecutive2 = function (nums) {
  if (nums.length === 0) return 0;
  const set = new Set(nums);

  let longest = 0;
  for (let num of nums) {
    let count = 1;
    let currentNum = num;
    if (!set.has(currentNum - 1)) {
      while (set.has(currentNum + 1)) {
        count++;
        currentNum++;
      }
      longest = Math.max(longest, count);
    }
  }

  return longest;
};

// console.log(longestConsecutive2([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
