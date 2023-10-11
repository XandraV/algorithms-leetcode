// MAKING ANAGRAMS
// how many letter's need to delete to make two strings anagrams of each other
const st1 = "cdeb";
const st2 = "abcb";

const countOccurence = (text, letterToBeCounted) => {
  let count = 0;
  for (let letter of text) {
    if (letter === letterToBeCounted) {
      count++;
    }
  }
  return count;
};

function makingAnagrams(s1, s2) {
  let count = 0;
  let map = {};
  // create a map with counts of each letter in s1
  for (let letter of s1) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  // loop thru s2
  // if s2 letter not in map ie in s1 then set count to -1 for that letter
  // else decrement the count
  for (let letter of s2) {
    if (map[letter]) {
      map[letter] -= 1;
    } else {
      map[letter] = -1;
    }
  }
  // if letter occurences are equal in both strings it should give zero count
  // if anything else then 0, then we sum up absolute values of these occurences
  count = Object.values(map).reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
  return count;
}

// Time Complexity: looping thru s1 and s2 -> O(n+m)
// Space Complexity: O(p) because we create the object with s1
const res = makingAnagrams(st1, st2);
console.log(res);
