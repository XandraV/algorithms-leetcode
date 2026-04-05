// higher-order function receives a function as an argument
// and returns a new one, uses a closure to maintain a cache of previous
// calls and calculated values;
// we use a simple object here, but could use a set
// the returned function first creates a string out of the arguments
// to the original fn function
// If that string is already used as a key in the cache
// directly return the previously calculated value from it
// otherwise, call the original function, store the returned value
// in the cache, and return it.
const memoize = (fn: (...args: any[]) => any) => {
  const cache: Record<string, any> = {};
  const memoizedFn = (...args: any[]) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    return (cache[key] = fn(...args));
  };
  return memoizedFn;
};

// fibonacci plain recursive implementation
// O(2^n - 1)
function fibonacci(n: number): number {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// memoized version of fibonacci plain recursive implementation - Top down DP
const fiboMemoised = memoize((n: number) => {
  if (n < 2) return n;
  return fiboMemoised(n - 1) + fiboMemoised(n - 2);
});

// O(n) because of caching only calculating everything once
function fib(N: number): number {
  let cache: Record<number, number> = {};

  function recurFib(N: number): number {
    let result: number | null = null;
    if (N in cache) {
      return cache[N];
    }

    if (N < 2) {
      result = N;
    } else {
      result = recurFib(N - 1) + recurFib(N - 2);
    }
    // put result in cache for later reference.
    cache[N] = result;
    console.log(cache);
    return result;
  }

  return recurFib(N);
}
console.log(fib(8));

/*
Fibonacci Series with Bottom-Up DP
Let’s consider DP from the bottom up. 
When working in a top-down fashion, you have to hold off on calculating
values until some calculations for lower values are finished. 
In Top-Down DP you couldn’t calculate fibo(7) until the calculations
for fibo(6) and fibo(5) were done. Using the bottom-up method, 
you start at the lowest cases and work your way up. 
To find a Fibonacci number from the bottom up, make the calculations 
the same way that the series is defined, starting with 0 and 1, 
and always adding the last two numbers to create the next number in 
the sequence:
*/
const fiboWhileLoop = (n: number): number => {
  // need no calculations
  if (n < 2) return n;
  // set up a loop with a and b represent the two latest numbers in the sequence,
  // and loop enough times until b becomes the number you are seeking
  let a = 0;
  let b = 1;
  // a, b -> a is second latest, b is latest
  // to get the next number in the sequence, we add a and b together
  // a becomes b, b becomes a+b | a -> b, b-> a+b
  while (n > 1) {
    [a, b] = [b, a + b];
    n--;
  }
  return b;
};
// the previously calculated numbers aren’t saved
// because the algorithm works in a bottom-up fashion,
// calculating later numbers by using previous ones;
// you always need only the two ∏latest numbers,
// so there’s no need to store all the others.

// Dynamic proramming solution
const fibDP = (n: number): number => {
  // next = prev + curr
  const dp = [];

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(fibDP(5)); // 5
