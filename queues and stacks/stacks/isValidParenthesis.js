// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = function (s) {
  const validBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (validBrackets[s[i]]) {
      stack.push(s[i]);
      
    } else {
      let leftBracket = stack.pop();
      if (validBrackets[leftBracket] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"))
//  "()[]{}" - true
//  "(]" - false
//  "([])"; - true
