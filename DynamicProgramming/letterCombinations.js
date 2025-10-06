/* Hashtable/Recursion
Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. 
Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/
const letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const map = new Map();
  map.set("1", "");
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  let results = [];

  // Track index instead of looping all digits each time
  function dfs(index, currString) {
    // base case: when processed all digits, push the current string
    //  into the result array
    if (digits.length === index) {
      results.push(currString);
      return;
    }

    //  At each digit, loop through its possible letters
    for (let char of map.get(digits[index])) {
      // Add that letter char to the current combination currString
      // Call dfs for the next digit ie next index
      dfs(index + 1, currString + char);
    }
  }

  dfs(0, "");

  return results;
};

console.log(letterCombinations("23")); // [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
