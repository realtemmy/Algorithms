// time - O(N^2), space - O(N)
const removeDuplicates = (nums) => {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (newArr.includes(nums[i])) {
      continue;
    } else {
      newArr.push(nums[i]);
    }
  }
  return newArr;
};

// time - O(N), space - O(N^2)
const removeDuplicates2 = function (nums) {
  const seen = new Map();
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    if (seen.has(char)) {
      continue;
    } else {
      newArr.push(char);
      seen.set(char, true);
    }
  }
  return newArr;
};


// Or i can just modify current nums(in-place) to make time - O(N) 
// by setting all nums in a set and returning the keys
const removeDuplicates3 = function (nums) {
  const map = new Set();
  for(let i = 0; i < nums.length; i++){
    let char = nums[i];
    map.add(char);
  }
  return Array.from(map.keys());
};

const removeDuplicates4 = function (nums) {
  return [...new Set(nums)];
};

// console.log(removeDuplicates2([1, 1, 2]));
console.log(removeDuplicates3([1, 1, 1, 2, 2, 2, 3, 4, 4, 5]));
