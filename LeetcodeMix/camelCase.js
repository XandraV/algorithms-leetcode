// Camelcase count words
function camelcase(s) {
  if (s.length === 0) return 0;
  let count = 1;
  for (let char of s) {
    if (char !== char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(camelcase(""));
