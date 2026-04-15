// 1160. Find Words That Can Be Formed by Characters
// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars
// (each character can only be used once for each word in words).
// Return the sum of lengths of all good strings in words.

function countCharacters(words: string[], chars: string): number {
  let sum = 0;

  const freq = new Map<string, number>();
  for (let c of chars) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
  }

  for (let word of words) {
    const f = new Map<string, number>();

    for (let c of word) {
      f.set(c, (f.get(c) ?? 0) + 1);
    }

    let valid = true;

    for (let [char, count] of f) {
      if ((freq.get(char) ?? 0) < count) {
        valid = false;
        break;
      }
    }

    if (valid) {
      sum += word.length;
    }
  }

  return sum;
}
// no extra map per word
function countCharacters2(words: string[], chars: string): number {
  let sum = 0;

  const base = new Map<string, number>();
  for (let c of chars) {
    base.set(c, (base.get(c) ?? 0) + 1);
  }

  for (let word of words) {
    const temp = new Map(base);

    let valid = true;

    for (let c of word) {
      if ((temp.get(c) ?? 0) === 0) {
        valid = false;
        break;
      }
      temp.set(c, temp.get(c)! - 1);
    }

    if (valid) sum += word.length;
  }

  return sum;
}
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); //6
