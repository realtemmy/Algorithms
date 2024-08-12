// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

const searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        return [mid - 1, mid];
      } else if(nums[mid + 1] === target) {
        return [mid, mid + 1];
      }else{
        return [mid, mid]
      }
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0))
console.log(searchRange([1], 1));
// [3,3,3]



// nums = [5,7,7,8,8,10], target = 8 //output = [3, 4]
// nums = [5,7,7,8,8,10], target = 6 //output = [-1, -1]
// nums = [], target = 0 //output = [-1, -1]
