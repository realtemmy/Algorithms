const romatToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let counter = 0;
  const string = s.split("");
  for (let i = 0; i < string.length; i++) {
    if (map[string[i + 1]] > map[string[i]]) {
      let increment = map[string[i + 1]] - map[string[i]];
      counter += increment;
      i++
    } else {
      counter += map[string[i]];
    }
  }
  return counter;
};

console.log(romatToInt("III"));
console.log(romatToInt("LVIII"));
console.log(romatToInt("MCMXCIX"));


