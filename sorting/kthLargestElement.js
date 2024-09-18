
const findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);
  return nums[indexToFind];
};

const quickSort = function (nums, left, right) {
  if (left < right) {
    let j = partition(nums, left, right);
    quickSort(nums, left, j - 1);
    quickSort(nums, j + 1, right);
  }
};
const partition = function (nums, left, right) {
  let i = left,
    pivot = nums[right];
  for (let j = left; j < nums.length; j++) {
    if (nums[j] < pivot) {
      swap(nums, i, j);

      i++;
    }
  }
  swap(nums, i, right);
  return i;
};
const swap = function (nums, i, j) {
  let hold = nums[j];
  nums[j] = nums[i];
  nums[i] = hold;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
