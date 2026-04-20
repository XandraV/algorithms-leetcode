// 1208. Get Equal Substrings Within Budget
// You are given two strings s and t of the same length and an integer maxCost.
// You want to change s to t. Changing the ith character of s to ith character
// of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
// Return the maximum length of a substring of s that can be changed to be
// the same as the corresponding substring of t with a cost less than or equal
// to maxCost. If there is no substring from s that can be changed to its
// corresponding substring from t, return 0.
function equalSubstring(s: string, t: string, maxCost: number): number {
  let maxLength = 0;
  let sum = 0;
  // Calculate the differences between s[i] and t[i].
  // Use a sliding window to track the longest valid substring.
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const diff = Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    sum += diff;
    console.log(sum);
    while (sum > maxCost) {
      sum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(equalSubstring("abcd", "bcdf", 3)); // 3
