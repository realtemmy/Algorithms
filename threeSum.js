// Given an integer array nums, return all the triplet [nums[i], nums[j], nums[k]]such that i != j, i!= k, j != k
// and nums [i] + nums[j] + nums[k]


// ========== Brute force ========== //
const thereeSum = (nums) => {
  let totalArray = [];
  const a = nums[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (a + nums[i] + nums[j] === 0) {
        console.log(a + nums[i] + nums[j]);
        totalArray.push([a , nums[i] , nums[j]]);
      }
    }
  }

  return totalArray;
};

console.log(thereeSum([-1, 0, 1, 2, -1, -4]));
//  howtofree.org