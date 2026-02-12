// 3719. Longest Balanced Subarray I
// You are given an integer array nums.
// A subarray is called balanced if the number of distinct even
// numbers in the subarray is equal to the number of distinct odd numbers.
// Return the length of the longest balanced subarray.

function longestBalanced(nums: number[]): number {
  let longestArrayLength = 0;

  for (let i = 0; i < nums.length; i++) {
    const evens = new Set();
    const odds = new Set();
    for (let j = i; j < nums.length; j++) {
      let num = nums[j];
      if (num % 2 === 0) {
        evens.add(num);
      } else {
        odds.add(num);
      }

      if (evens.size == odds.size) {
        longestArrayLength = Math.max(longestArrayLength, j - i + 1);
      }
    }
  }
  return longestArrayLength;
}

console.log(longestBalanced([2, 5, 4, 3]));

function longestBalanced2(nums: number[]): number {
  let longestArrayLength = 0;

  for (let i = 0; i < nums.length; i++) {
    const evens = new Map();
    const odds = new Map();
    let distinctEvens = 0;
    let distinctOdds = 0;
    for (let j = i; j < nums.length; j++) {
      let num = nums[j];
      if (num % 2 === 0) {
        let seenEven = evens.get(num) ?? 0;
        if (seenEven === 0) {
          distinctEvens++;
        }
        evens.set(num, seenEven + 1);
      } else {
        let seenOdd = odds.get(num) ?? 0;
        if (seenOdd === 0) {
          distinctOdds++;
        }
        odds.set(num, seenOdd + 1);
      }

      if (distinctEvens == distinctOdds) {
        longestArrayLength = Math.max(longestArrayLength, j - i + 1);
      }
    }
  }
  return longestArrayLength;
}
