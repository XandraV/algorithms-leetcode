// Given a list of non-negative integers nums,
// arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to
// return a string instead of an integer.

function largestNumber(nums: number[]): string {
  const result = nums
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");

  // If the largest number starts with '0', the entire number is zero
  return result[0] === "0" ? "0" : result;
}

console.log(largestNumber([3, 30, 34, 5, 9]));
// 9534330
