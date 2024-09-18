const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  // let map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   map.set(nums[i], i);
  // }

  let map = new Set(nums);

  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i,
      count = 1;
    while (map.has(nums[j] + 1) || map.has(nums[j] + 1) === 0) {
      j = map.get(nums[j] + 1);
      count++;
      longest = Math.max(longest, count);
    }
  }

  return longest;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

