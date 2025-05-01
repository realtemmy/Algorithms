var isPalindrome = function (x) {
  let temp = x;
  let reverse = 0;
  if (x < 0) {
    return false;
  }
  while (temp != 0) {
    let remainder = temp % 10;
    reverse = reverse * 10 + remainder;
    temp = Math.floor(temp / 10);
    console.log(reverse);
  }
  return reverse === x;
};

console.log(isPalindrome(121));
