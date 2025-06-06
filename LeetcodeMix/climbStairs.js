function climbStairs(n) {
  let cache = {};
  // new function for caching
  function climb(n) {
    let result = null;
    if (Object.keys(cache).includes(n)) {
      return cache[n];
    }
    // base case
    if (n === 1) {
      result = 1;
    } else if (n === 2) {
      result = 2;
    } else {
      // not base case
      result = climbStairs(n - 1) + climbStairs(n - 2);
    }
    cache[n] = result;
    console.log(cache);
    return result;
  }
  return climb(n);
}

function climbStairs2(n) {
  // base case
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    // not base case
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
}

console.log(climbStairs2(5)); //8
