const nums = [3, 7, 8, 5, 2, 1, 9, 5, 4];

const swap = function (i, j) {
  let hold = nums[i];
  nums[i] = nums[j];
  nums[j] = hold;
};

const partition = function (l, h) {
  let pivot = nums[l],
    i = l,
    j = h;
  while (i <= j) {
    while (nums[i] < pivot) i++;
    while (nums[j] > pivot) j--;
    if (i <= j) {
      swap(i, j);
      i++;
      j--;
    }
  }

  return j;
};

const quickSort = function (l, h) {
  if (l < h) {
    let j = partition(l, h);
    quickSort(l, j);
    quickSort(j + 1, h);
  }
};

quickSort(0, nums.length - 1);

console.log(nums);
