function firstUniqChar1(s: string): number {
    const charMap: Map<string, number> = new Map();

    for(let char of s){
        charMap.set(char, (charMap.get(char) ?? 0 )+ 1)
    }

    for(let i = 0; i < s.length; i++){
            if(charMap.get(s[i]) === 1) return i;
        }

    return -1;
};

function firstUniqChar(s: string): number {
  let idx = Infinity;
  const abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < abc.length; i++) {
    let currChar = abc[i];
    let firstIdx = s.indexOf(currChar);
    if (firstIdx > -1 && s.lastIndexOf(currChar) === firstIdx && firstIdx < idx) {
      idx = firstIdx
    }
  }

  return idx > s.length ? -1 : idx;
}

console.log(firstUniqChar("leetcode"));
