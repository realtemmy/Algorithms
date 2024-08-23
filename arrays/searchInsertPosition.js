// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//  If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] === target) {
      return mid;
    } else {
      high = mid - 1;
    }
  }
  if (nums[mid] < target) {
    return mid + 1;
  } else {
    return mid;
  }
};

console.log(searchInsert([1, 3, 5, 6], 2));

// nums = [1,3,5,6], target = 5 //ans-2
// Input: nums = [1,3,5,6], target = 2 Output: 1
// Input: nums = [1,3,5,6], target = 7 Output: 4
