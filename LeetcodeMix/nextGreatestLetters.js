const letters = ["a", "d", "e"];
//const target = 'c' // solution: d
const target = "z"; // solution: a
function nextGreatestLetters(letters, target) {
  for (let l of letters) {
    if (l > target) {
      return l;
    }
  }
  return letters[0];
}

console.log(nextGreatestLetters(letters, target));
