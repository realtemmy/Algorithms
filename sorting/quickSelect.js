const findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quictSelect(nums, 0, nums.length - 1, indexToFind);
  return nums[indexToFind];
};

const swap = function (nums, i, j) {
  let hold = nums[i];
  nums[i] = nums[j];
  nums[j] = hold;
};

const quictSelect = function (nums, left, right, indexToFind) {
  if (left < right) {
    i = partition(nums, left, right);
    if (indexToFind < i) {
      quictSelect(nums, left, i - 1, indexToFind);
    } else if (indexToFind > i) {
      quictSelect(nums, i + 1, right, indexToFind);
    } else {
      return nums[i];
    }
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

console.log(findKthLargest([5, 3, 1, 6, 4, 2], 2));
