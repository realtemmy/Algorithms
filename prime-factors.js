// List the prime factors that make up a number eg 24 = 2x2x2x3 

let value = 25;
const primeNo = [];
for (let i = 2; i <= value; ) {
  if (value % i === 0) {
    value = value / i;
    primeNo.push(i);
  }
  if (value % i !== 0) {
    // console.log(i);
    ++i;
  }
}

console.log(primeNo);
