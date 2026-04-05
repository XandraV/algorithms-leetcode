// 1347. Minimum Number of Steps to Make Two Strings Anagram
// You are given two strings of the same length s and t. 
// In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters
// with a different (or the same) ordering.

// Anagram: both strings have the same frequency of each character
// We can replace any character in t, so the question becomes:
// How many characters in t are “wrong” compared to s?
// Strategy
// 1. Count frequency of characters in s
// Go through t
// For each character:
// If it exists in s → use it (decrease count)
// Otherwise → this character must be replaced → count a step
function minSteps(s: string, t: string): number {
    let count = 0;
    const freqS = new Map<string, number>();

    for (let c of s) {
        freqS.set(c, (freqS.get(c) ?? 0) + 1);
    }

    for (let c2 of t) {
        if ((freqS.get(c2) ?? 0) > 0) {
            freqS.set(c2, freqS.get(c2)! - 1);
        } else {
            count++;
        }
    }

    return count;
}

// best solution uses an array of size 26 to count the frequency of characters in s and t,
//  which is more efficient than using a Map.
function minSteps2(s: string, t: string): number {
    let charDiffCount = new Array(26).fill(0)
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        charDiffCount[s.charCodeAt(i) - 97]++
        charDiffCount[t.charCodeAt(i) - 97]--
    }

    for (const countDiff of charDiffCount) {
        if (countDiff > 0) count+= countDiff
    }

    return count
};