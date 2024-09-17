// ========== Brute force ===========
const productExceptSelf = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let multiple = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        multiple *= nums[j];
      }
    }
    arr[i] = multiple;
  }
  return arr;
};

// ========== Optimized ============= //
//  space - O(1), time - O(N)
const productExceptSelf2 = function (nums) {
  let prefix = 1,
    postfix = 1,
    output = [];
  for (let i = 0; i < nums.length ; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
};

console.log(productExceptSelf2([1, 2, 3, 4])); // [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
