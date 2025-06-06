function myPow(x, n) {
    if (n === 1) {
      return x;
    } else {
      return x * myPow(x, n - 1);
    }
  }
  
  console.log(myPow(3, 3));