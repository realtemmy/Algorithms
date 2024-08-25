// Given an integer array nums, return all the triplet [nums[i], nums[j], nums[k]]such that i != j, i!= k, j != k
// and nums [i] + nums[j] + nums[k]

const thereeSum = (nums) => {
  let sorted = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length - 2; i++) {
    let target = -nums[i];
    let j = i + 1,
      k = sorted.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (j < k) {
      if (nums[j] + nums[k] === target) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else if (nums[j] + nums[k] < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

// const thereeSum = function (nums) {
//   const arr = [];
//   for (let index = 0; index < nums.length - 2; index++) {
//     let i = nums[index],
//       j = nums[index + 1],
//       k = nums[index + 2];
//     if (i + j + k === 0) {
//       arr.push([i, j, k]);
//     }
//   }
//   return arr;
// };

// console.log(thereeSum([-1, 0, 1, 2, -1, -4]));
console.log(thereeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(thereeSum([0, 0, 0, 0])); //[0, 0, 0]

//  howtofree.org
