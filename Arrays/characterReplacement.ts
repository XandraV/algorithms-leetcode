// 424. Longest Repeating Character Replacement
// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase
// English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same
// letter you can get after performing the above operations.

function characterReplacement(s: string, k: number): number {
  const count: Record<string, number> = {}; // counts of characters in the current window
  let left = 0; // left pointer of the sliding window
  let maxCount = 0; // max frequency of a single char in the window
  let maxLength = 0; // max length of valid window

  // initially right and left pointer are the same, 0 at the start of the string
  for (let right = 0; right < s.length; right++) {
    // length of the current window is right - left + 1
    const char = s[right]; // current character at the right pointer
    count[char] = (count[char] || 0) + 1;

    // update max frequency in the window
    // ie the character's frequency that's the highest in the current window
    // this helps to determine how many chars need to be replaced
    maxCount = Math.max(maxCount, count[char]);

    // To calculate how many changes needed we subtract the maxCount
    // from the window length as those are the characters that occure less frequently
    // and need to be changed to the most frequent character.
    // After this, if the number of changes needed to make all characters the same(ie same as the most frequent one)
    // is greater than k (the number of allowed changes)
    // then we need to shrink the window from the left (because we're always increasing right)
    // windowLength minus maxCount = number of changes needed
    // if this is > k, shrink window from the left and decrease the count of the char at left pointer
    while (right - left + 1 - maxCount > k) {
      count[s[left]] -= 1;
      left += 1;
    }

    // update max length as long as the windowLength - maxCount = changes needed
    // is less than or equal to k which we checked above
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(characterReplacement("ABAB", 1)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
