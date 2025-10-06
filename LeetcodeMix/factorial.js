// pure recursive implementation of factorial
function factorial(n) {
  if (n === 1 || n === 0) {
    // base case
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));
// iterative implementation of factorial
const factorialIterative = (n) => {
  if (n < 2) return n;
  else {
    let a = 1;
    while (n > 1) {
      a *= n;

      n--;
    }
    return a;
  }
};
console.log(factorialIterative(5));