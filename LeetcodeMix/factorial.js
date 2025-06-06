function factorial(n) {
  if (n === 1 || n === 0) {
    // base case
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));
