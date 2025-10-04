/*
Given a non-negative integer x
return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
Constraint: 0 <= x <= 231 - 1
*/
// Complexity O(log n) time | O(1) space
const mySqrt = function (x) {
  if (x < 2) return x; // shortcut for 0 and 1

  let low = 0;
  let high = x;
  let mid = -1;
  let prevMid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    if (mid * mid == x) {
      return mid;
    }

    if (mid * mid > x) {
      high = mid - 1;
    }

    if (mid * mid < x) {
      prevMid = mid;
      low = mid + 1;
    }
  }
  // closest square root
  return prevMid;
};

console.log(mySqrt(2)); //2
