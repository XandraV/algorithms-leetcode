// 2516. Take K of Each Character From Left and Right
// You are given a string s consisting of the characters 'a', 'b', and 'c'
// and a non-negative integer k.
// Each minute, you may take either the leftmost character of s,
// or the rightmost character of s.
// Return the minimum number of minutes needed for you to take
// at least k of each character, or return -1 if it is not possible
// to take k of each character.

function takeCharacters(s: string, k: number): number {
  // we try to find the longest subarray in the middle, such that after taking the rest (prefix + suffix)
  // we still have at least k of each character
  const arr = s.split("");
  // freqency of each character in the string
  const totalFreq = new Map<string, number>();
  for (let char of arr) {
    totalFreq.set(char, (totalFreq.get(char) || 0) + 1);
  }

  // Check feasibility
  for (const [char, count] of totalFreq) {
    if (count < k) return -1;
  }

  // maximum frequency of each character in the remaining middle part of the string
  // = totalFreq - k
  const target = new Map<string, number>();
  for (let [char, freq] of totalFreq) {
    target.set(char, freq - k);
  }

  // sliding window -> expand right, shrink from left if needed
  let left = 0;
  let maxLength = 0;
  // frequency of each char within the window
  const window = new Map<string, number>();
  for (let right = 0; right < arr.length; right++) {
    let curr = arr[right];

    window.set(curr, (window.get(curr) || 0) + 1);
    // if we have more of the curr char in thw window than allowed
    // then shift window from left
    while ((window.get(curr) || 0) > (target.get(curr) || 0)) {
      window.set(arr[left], window.get(arr[left])! - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return arr.length - maxLength;
}
/**
s = "aabaaaacaabc", k = 2
total = {a: 7, b: 2, c: 3}
target = {a: 5, b: 0, c: 1}  // maximum we can leave
 */
console.log(takeCharacters("aabaaaacaabc", 2));
// 8
