// check if two strings are anagrams of each other
const w1 = "abpd";
const w2 = "bpad";

function isAnagram(s1, s2) {
  let map = {};
  for (let letter of s1) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  }

  for (let letter of s2) {
    if (map[letter]) {
      map[letter] -= 1;
    } else {
      return false;
    }
  }

  console.log(Object.values(map).reduce((a, b) => a + b));
  console.log(Object.values(map).every((value) => value === 0));

  return Object.values(map).every((value) => value === 0);
}

console.log(isAnagram(w1, w2));
