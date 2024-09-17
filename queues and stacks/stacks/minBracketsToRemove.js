const minBracketsToRemove = function (s) {
  const string = s.split("");
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(i);
    } else if (string[i] === ")") {
      if (stack.length === 0) {
        string[i] = "";
      } else {
        stack.pop();
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    string[stack[i]] = "";
  }

  return string.join("");
};

// console.log(minBracketsToRemove("a(bc(d)"));
// console.log(minBracketsToRemove("(ab(c)d"));
console.log(minBracketsToRemove("))(("));
