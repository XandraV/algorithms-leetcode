// Given a 0-indexed integer array nums and an integer d
// return the number of triplets (i, j, k) such that i < j < k
// and (nums[i] + nums[j] + nums[k]) % d == 0.
function divisibleTripletCount(nums: number[], d: number): number {
  let res = 0;
  // precompute remainders
  const remainders = nums.map((num) => num % d);

  for (let i = 0; i < nums.length; i++) {
    // j must be bigger than i
    for (let j = i + 1; j < nums.length; j++) {
      // d - ... flips it to the positive remainder we actually need.
      const remainderToLookFor =
        (d - ((remainders[i] + remainders[j]) % d)) % d;

      // k must be > j
      for (let k = j + 1; k < nums.length; k++) {
        if (remainders[k] === remainderToLookFor) {
          res++;
        }
      }
    }
  }

  return res;
}

console.log(divisibleTripletCount([3, 3, 4, 7, 8], 5)); // 3
console.log(divisibleTripletCount([3, 3, 3, 3], 3)); // 4
