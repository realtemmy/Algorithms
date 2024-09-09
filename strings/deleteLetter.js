
const backspaceString = (a, b) => {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "#") {
      arr1.pop();
    } else {
      arr1.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "#") {
      arr2.pop();
    } else {
      arr2.push(b[i]);
    }
  }

  console.log(arr1, arr2);

  return arr1.join() === arr2.join();
};

// === OPTIMIZED =====
// time - 0(n), space 0(1)

const backspaceString2 = (a, b) => {
  let p1 = a.length - 1,
    p2 = b.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (a[p1] === "#" || b[p2] === "#") {
      if (a[p1] === "#") {
        let backspace = 2;
        while (backspace > 0) {
          p1--;
          backspace--;
          if (a[p1] === "#") {
            backspace += 2;
          }
        }
      }
      if (b[p2] === "#") {
        let backspace = 2;
        while (backspace > 0) {
          p2--;
          backspace--;
          if (b[p2] === "#") {
            backspace += 2;
          }
        }
      }
    } else {
      if (a[p1] !== b[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

console.log(backspaceString("abc#d", "abzz##d"));
