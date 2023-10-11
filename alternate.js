// Two Characters - return length of the longest valid string of alternating letters
function alternate(s) {
  let l = 0;
  let res = s;
  let uniqueLetters = [];
  for (let c of s) {
    if (!uniqueLetters.includes(c)) {
      uniqueLetters.push(c);
    }
  }

  for (let i = 0; i < uniqueLetters.length; i++) {
    for (let j = i + 1; j < uniqueLetters.length; j++) {
      res = s;
      //console.log(uniqueLetters[i], uniqueLetters[j]);
      const lettersToRemove = uniqueLetters.filter(
        (letter) => letter !== uniqueLetters[i] && letter !== uniqueLetters[j]
      );
      //console.log(lettersToRemove);
      lettersToRemove.forEach((letter) => {
        res = res.replaceAll(letter, "");
      });

      let temp = 0;
      for (let k = 0; k < res.length; k++) {
        console.log(res[k], res[k + 1]);
        if (res[k] === res[k + 1]) {
          temp = 0;
          break;
        } else {
          temp = res.length;
        }
      }
      l = temp > l ? temp : l;

      console.log(res);
    }
  }
  console.log(res);
  return l;
}

console.log(alternate("beabeefeabr "));
