// This function groups anagrams from an array of strings            
function groupAnagrams(arr) {
  const anagramGroups = new Map();
  for (let str of arr) {
    canonical = str.split("").sort().join("");
    if (anagramGroups.has(canonical)) {
      anagramGroups.get(canonical).push(str);
    } else {
      anagramGroups.set(canonical, [str]);
    }
  }
  return Array.from(anagramGroups.values());
}

// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
);
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["Eat", "Tea", "Tan", "Ate", "Nat", "Bat"]))
);
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["hello", "world", "test"]))
);
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(["", "", ""])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(["a", "b", "a"])));
console.log("---------------");
