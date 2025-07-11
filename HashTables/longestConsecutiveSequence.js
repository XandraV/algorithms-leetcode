
// This function finds the length of the longest 
// consecutive sequence of integers in the given 
// array.                                        
function longestConsecutiveSequence(input) {
  if (input.length === 0) return 0;

  const arr1 = input.sort((a, b) => a - b);
  let longest = 1;
  let currentStreak = 1;

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] === arr1[i - 1]) {
      // skip duplicates
      continue;
    } else if (arr1[i] === arr1[i - 1] + 1) {
      currentStreak++;
    } else {
      longest = Math.max(longest, currentStreak);
      currentStreak = 1;
    }
  }

  return Math.max(longest, currentStreak);
}

function longestConsecutiveSequence2(nums) {
    const numSet = new Set();
    for (const num of nums) {
        numSet.add(num);
    }
 
    let longestStreak = 0;
 
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
 
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
 
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
 
    return longestStreak;
}
// -------------------
// No Consecutive Sequence
// -------------------
console.log("No Consecutive Sequence:");
console.log("Input: [1, 3, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 3, 5]));
console.log("---------------");

// -------------------
// Single Element
// -------------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", longestConsecutiveSequence([1]));
console.log("---------------");

// -------------------
// Consecutive Sequence
// -------------------
console.log("Consecutive Sequence:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log("---------------");

// -------------------
// Unordered Input
// -------------------
console.log("Unordered Input:");
console.log("Input: [5, 2, 3, 1, 4]");
console.log("Output: ", longestConsecutiveSequence([5, 2, 3, 1, 4]));
console.log("---------------");

// -------------------
// Empty Array
// -------------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", longestConsecutiveSequence([]));
console.log("---------------");

// -------------------
// Multiple Sequences
// -------------------
console.log("Multiple Sequences:");
console.log("Input: [1, 2, 3, 10, 11, 12]");
console.log("Output: ", longestConsecutiveSequence([1, 2, 3, 10, 11, 12]));
console.log("---------------");
