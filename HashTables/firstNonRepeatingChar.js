// similar to find duplicaates
function firstNonRepeatingChar(myString){
    const charCounts = new Map();
    
    for(let char of myString){
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    
    for(let [key, value] of charCounts.entries()){
        if(value == 1){
            return key;
        }
    }
    
    return null;
}

console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
console.log("---------------");

console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");

console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log("---------------");

console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");

console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log("---------------");


