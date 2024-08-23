// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

var mySqrt = function (x) {
  let left = 0,
    right = x,
    inCase = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid ** 2 < x) {
      left = mid + 1;
      inCase = mid;
    } else if (mid ** 2 === x) {
      return mid;
    } else {
      right = mid - 1;
    }
  }
  return inCase;
};

console.log(mySqrt(7))
