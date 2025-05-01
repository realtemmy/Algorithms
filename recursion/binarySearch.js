const binarySearch = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }else if(nums[mid] < target){
        left = mid + 1
    }else{
        right = mid - 1
    }
  }

  return -1
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(nums, 0));
