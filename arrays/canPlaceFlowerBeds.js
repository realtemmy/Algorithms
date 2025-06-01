// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

const canPlaceFlowers = function (flowerbed, n) {
  let index = 0;
  while (index < flowerbed.length && n > 0) {
    if (flowerbed[index] === 0 && flowerbed[index - 1] === 0) {
      n--;
      flowerbed[index] = 1;
    }
    index++;
  }
  if (n >= 1) {
    return false;
  } else return true;
};

// Use 3 pointers: prev, current and next
// If all  3 pointers are zero, then current is updated to one
const canPlaceFlowers2 = function (flowerbed, n) {
  let prev = -1,
    current = 0,
    next = 1;
  while (current < flowerbed.length && n > 0) {
    if (!flowerbed[prev] && flowerbed[current] === 0 && !flowerbed[next]) {
      flowerbed[current] = 1;
      n--;
    }
    prev++;
    current++;
    next++;
  }

  return n < 1
};

console.log(canPlaceFlowers2([1, 0, 0, 0, 1], 1)); //true
console.log(canPlaceFlowers2([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers2([1, 0, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers2([0, 0, 1, 0, 1], 1)); //true
