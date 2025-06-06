// Recursive Digit Sum

function superDigit(n, k) {
  // base case
  if (n.length === 1) return n;

  // this part reduces all other cases towards the base case
  const nArr = n.split("");

  let sum = nArr.reduce((a, b) => +a + +b);
  sum = sum * k + "";

  return superDigit(sum, 1);
}

console.log(superDigit("9875", 2));
