// fibonacci
// O(2^n - 1)
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// O(n) because of caching only calculating everything once
function fib(N) {
  let cache = {};
  function recur_fib(N) {
    let result = null;
    if (Object.keys(cache).includes(N)) {
      return cache[N];
    }

    if (N < 2) {
      result = N;
    } else {
      result = recur_fib(N - 1) + recur_fib(N - 2);
    }
    // put result in cache for later reference.
    cache[N] = result;
    console.log(cache);
    return result;
  }

  return recur_fib(N);
}
console.log(fib(8));
