// Unique number and the number of occurence;

// const unique = (arr) => {
//     let uniqueArr = [];
//     let count = [];
//     for(let i = 0; i < arr.length; i++){
//         ++uniqueArr[i]
//     }
// };

// console.log(unique([1, 1, 2, 3, 4, 3, 4, 5, 4]));

const productExcSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let total = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        total = total * nums[j];
      }
    }
    result[i] = total;
  }

  return result;
};

console.log(productExcSelf([1, 2, 3, 4]));
