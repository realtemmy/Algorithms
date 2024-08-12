const string = "A man, a plan, a canal: Panama";

const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); //returns only alphanumeric
  console.log(s);

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome(string));
