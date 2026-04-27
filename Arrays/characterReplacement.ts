// 424. Longest Repeating Character Replacement
// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase
// English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same
// letter you can get after performing the above operations.

function characterReplacement(s: string, k: number): number {
  let longest = 0;
  let left = 0;
  const freqInWindow = new Map<string, number>();
  let maxFreqInWindow = 0;

  for (let right = 0; right < s.length; right++) {
    let curr = s[right];

    // Update frequency and track the global max frequency seen in any valid window
    freqInWindow.set(curr, (freqInWindow.get(curr) ?? 0) + 1);
    maxFreqInWindow = Math.max(maxFreqInWindow, freqInWindow.get(curr)!);

    // window length - maxFreq = count of "other" characters that has to be replaced <= k
    if (right - left + 1 - maxFreqInWindow > k) {
      let leftMostChar = s[left];
      freqInWindow.set(leftMostChar, freqInWindow.get(leftMostChar)! - 1);
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(characterReplacement("ABAB", 1)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
