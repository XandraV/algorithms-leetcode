// Time Complexity is  O(n)
// Each recursive call reduces n by 1.
// There will be exactly n recursive calls before reaching the base case (n === 1).
// Each call does O(1) work (a multiplication and a comparison).
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// Because this is recursion, each call is stored on the call stack
// until the base case is reached.
// Hence we have n stack frames
// before the function starts returning.
// Space complexity = O(n)

console.log("result of factorial(4): ", factorial(4));
// 170! is the largest factorial that can be represented as a Number in JS
// factorial(171) returns Infinity because 171! exceeds the maximum safe integer in JS (Number.MAX_SAFE_INTEGER).
console.log("result of factorial(10): ", factorial(170)); 
// will cause stack overflow error and returns Infinity
// console.log("result of factorial(10000): ", factorial(10000));

/*
Call stack for factorial(4):

factorial(4)
    -> 4 * factorial(3)
            -> 3 * factorial(2)
                    -> 2 * factorial(1)
                            -> returns 1
                    <- 2 * 1 = 2
            <- 3 * 2 = 6
    <- 4 * 6 = 24

    Call stack visualization:
    |factorial(4)| = |1!|
    |factorial(3)| = |2!|
    |factorial(2)| = |3!|
    |factorial(1)| = |4!|
    |____________| = |__|
*/

// Iterative version of factorial
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// Time complexity: still O(n) → need to multiply n numbers.
// Space complexity: now O(1) → no recursion stack, just a single accumulator variable.

console.log("result of factorialLoop(4): ", factorialLoop(4));
//console.log("result of factorialLoop(10000): ", factorialLoop(10000));


function factorialBigInt(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log('result factorialBigInt(25n): ',factorialBigInt(25n));