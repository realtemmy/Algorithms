// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.


// time - O(N2), space - O(N2);
var combinationSum2 = function (candidates, target) {
  // 1) if current element > sum, skip
  // 2) keep first value, perform two sum on the remaining value ie target - first
  // 3) For two sum, for
  const array = [];
  for (let i = 0; i < candidates.length; i++) {
    let first = candidates[i];
    if (first > target) {
      continue;
    }
    if (first === target) {
      array.push(first);
      continue;
    }

    // Two sum that'd add up to target - first
    const set = new Set();
    for (let j = i + 1; j < candidates.length; j++) {
      let second = candidates[j];
      if (first + second === target) {
        array.push([first, second]);
        continue;
      }
      let comp = target - first - second;
      if(comp > 0 && set.has(second)){
        array.push([first, second, comp]);
      }else{
        set.add(comp);
      }
    }
  }
  return array;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// candidates = [10,1,2,7,6,1,5], target = 8
// Output: [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];

// Input: (candidates = [2, 5, 2, 1, 2]), (target = 5);
// Output: [[1, 2, 2], [5]];
