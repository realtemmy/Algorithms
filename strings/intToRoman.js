var intToRoman = function (num) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
// copilot wrote the following code for me.
  let roman = ""; 
  let counter = 0;
  const string = num.toString().split("").reverse();
  for (let i = 0; i < string.length; i++) {
    let digit = parseInt(string[i]);
    if (digit === 4) {
      roman = "IV" + roman;
    } else if (digit === 9) {
      roman = "IX" + roman;
    } else if (digit === 40) {
      roman = "XL" + roman;
    } else if (digit === 90) {
      roman = "XC" + roman;
    } else if (digit === 400) {
      roman = "CD" + roman;
    } else if (digit === 900) {
      roman = "CM" + roman;
    } else if (digit >= 5) {
      let remainder = digit - 5;
      let temp = "";
      for (let j = 0; j < remainder; j++) {
        temp += "I";
      }
      roman = "V" + temp + roman;
    } else {
      let temp = "";
      for (let j = 0; j < digit; j++) {
        temp += "I";
      }
      roman = temp + roman;
    }
  return roman;
  }
};

console.log(intToRoman(3456));



