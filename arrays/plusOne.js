// add one to the element and return
// Doesn't work for large numbers due to Javascript precision issues
const plusOne1 = function (nums) {
  let str = "";
  for (let i = 0; i < nums.length; i++) {
    str += nums[i];
  }
  let number = +str;
  number++;
  // convert back to array
  const array = Array.from(String(number), Number);
  return array;
};

// ========== Better way =================//
const plusOne = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 9) {
      nums[i]++;
      return nums;
    }
    nums[i] = 0;
  }
  nums.unshift(1);
  return nums;
};


// console.log(plusOne([1, 2, 3])); //return [1,2,4]
// console.log(plusOne([4, 3, 2, 1])); //return [4,3,2,1]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([9, 9, 9]));
