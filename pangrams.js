// string that contains every letter of the alphabet
function pangrams(s) {
  const text = s.replaceAll(" ", "").toLowerCase();
  const numOfUniqueLetters = new Set(text).size;

  return numOfUniqueLetters === 26 ? "pangram" : "not pangram";
}

console.log(pangrams("The quick brown fox jumps over the lazy dog"));
