// 438. Find All Anagrams in a String
// Given two strings s and p, return an array of all the start indices
// of p's anagrams in s. You may return the answer in any order.

function findAnagrams(s: string, p: string): number[] {
  const freq = new Map<string, number>();
  for (let char of p) {
    freq.set(char, (freq.get(char) ?? 0) + 1);
  }

  const result: number[] = [];
  const freqInWindow = new Map<string, number>();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let currChar = s[right];
    freqInWindow.set(currChar, (freqInWindow.get(currChar) ?? 0) + 1);

    if (right - left + 1 === p.length) {
      let valid = freq.size === freqInWindow.size;
      if (valid) {
        for (let [char, count] of freq) {
          if (freqInWindow.get(char) !== count) {
            valid = false;
            break;
          }
        }
      }

      if (valid) result.push(left);

      // always shrink window from the left
      let temp = s[left];
      freqInWindow.set(temp, freqInWindow.get(temp)! - 1);
      if (freqInWindow.get(temp) === 0) freqInWindow.delete(temp);
      left++;
    }
  }
  return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
// [0,6]
