// 1. 1 - Two Sum
// Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.

const twoSum = (nums: number[], target: number): number[] => {
  const idxMap: Map<number, number> = new Map(); // num, idx

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    // target = curr + complement
    // complement = target - curr

    let compl = target - curr;
    if (idxMap.has(compl)) {
      return [idxMap.get(compl)!, i];
    }
    idxMap.set(curr, i);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// 2. 46 - Permutations
//    Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

function permute(nums: number[]): number[][] {
  const used: boolean[] = new Array(nums.length).fill(false); // track used numbers
  const permutations: number[][] = [];

  function backtrack(path: number[]) {
    if (path.length === nums.length) {
      permutations.push([...path]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // skip if already in path
      let next = nums[i];
      used[i] = true;
      //if (path.includes(nums[i])) continue;

      path.push(next);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return permutations;
}

console.log(permute([1, 2, 3])); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 3. 70 - Climbing Stairs
//    You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top?

function climbStairs(n: number): number {
  if (n <= 2) return n;

  const dp: number[] = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
}

console.log(climbStairs(5)); // Output: 8
// 4. 238 - Product of Array Except Self
//    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
function productExceptSelf(nums: number[]): number[] {
  const leftProduct = new Array(nums.length).fill(1);
  leftProduct[0] = nums[0];
  const rightProduct = new Array(nums.length).fill(1);
  rightProduct[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1, j = nums.length - 2; i < nums.length, j >= 0; i++, j--) {
    leftProduct[i] = leftProduct[i - 1] * nums[i];
    rightProduct[j] = rightProduct[j + 1] * nums[j];
  }

  const result: number[] = [];

  for (let k = 0; k < nums.length; k++) {
    result[k] = (leftProduct[k - 1] ?? 1) * (rightProduct[k + 1] ?? 1);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([1, 2, 0, 4])); // Output: [0, 0, 8, 0]

// 5. 3 - Longest Substring Without Repeating Characters
//    Given a string s, find the length of the longest substring without duplicate characters.
function longestSubstring(s: string): number {
  let maxLen = 0;
  const charSet: Set<string> = new Set();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let curr = s[right];
    if (charSet.has(curr)) {
      console.log(left, right, curr);
      left = right;

      continue;
    }
    charSet.add(curr);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestSubstring("abcabcbb")); // Output: 3
console.log(longestSubstring("bbbbb")); // Output: 1
console.log(longestSubstring("pwwkew")); // Output: 3
// 6. 49 - Group Anagrams
//    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
function groupAnagrams(strs: string[]): string[][] {
  const groups: Map<string, string[]> = new Map();

  for (let word of strs) {
    let group = word.split("").sort().join("");
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)?.push(word);
  }
  return Array.from(groups.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 7. 78 - Subsets
//    Given an integer array nums of unique elements, return all possible subsets (the power set).
function subsets(nums: number[]): number[][] {
  const results: number[][] = [];
  function backtrack(start: number, path: number[]) {
    results.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return results;
}
console.log(subsets([1, 2, 3])); // Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 8. 98 - Validate Binary Search Tree
//    Given the root of a binary tree, determine if it is a valid binary search tree (BST).
function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  function isValid(node: TreeNode | null, min: number, max: number): boolean {
    if (node.left.val >= max || node.right.val <= min) {
      return false;
    }

    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }

  return isValid(root, -Infinity, Infinity);
}

// 9. 322 - Coin Change
//    You are given an integer array coins representing coins of different denominations and an integer amount.
// Return the fewest number of coins that you need to make up that amount.
function coinChange(coins: number[], amount: number): number {
  // dp[i] = minimum number of coins to make amount i
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed to make 0

  for (let i = 0; i <= amount; i++) {
    // we’re trying to make amount i and pick a coin num
    // remaining = i - coin
    // if we already know the best way to make i - coin, how do we get i?
    // Take the best way to make i - coin ie dp[i-coin]
    // Add this one coin to it -> dp[i-coin] + 1
    for (let coin of coins) {
      if (i - coin >= 0) {
        console.log(dp);
        // check coin is not too large
        // take minimum of dp[i] and dp[i - coin] + 1 because we are trying multiple coins
        // so we will keep overiding dp[i] until we find the minimum
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // Output: 3
console.log(coinChange([2], 3)); // Output: -1
// 10. 121 - Best Time to Buy and Sell Stock
//     You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock.
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }

  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0

// 11. 26 - Remove Duplicates from Sorted Array
//    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.
function removeDuplicates(nums: number[]): number {
  let lastUniqueIdx = 0; // insert spot of the unique element - at 0 it's unique so we start j at 1
  for (let nextUniqueIdx = 1; nextUniqueIdx < nums.length; nextUniqueIdx++) {
    // nextUniqueIdx candidate
    if (nums[lastUniqueIdx] !== nums[nextUniqueIdx]) {
      // insert nextUniqueIdx after lastUniqueIdx ie move the pointer then insert
      lastUniqueIdx++;
      nums[lastUniqueIdx] = nums[nextUniqueIdx];
    }
  }

  return lastUniqueIdx + 1; // number of unique
}

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

// 12. 20 - Valid Parentheses
//    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if every open bracket is closed by the same type of closing bracket in the correct order.

function valid(s: string): boolean {
  if (s[0] === ")") return false;
  const stack: string[] = [s[0]];

  for (let i = 1; i < s.length; i++) {
    let curr = s[i];
    let top = stack[stack.length - 1];

    if (curr === ")" && top === "(") {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }
  return stack.length === 0;
}

console.log(valid("()()()")); // true
console.log(valid("()()()))")); // false
console.log(valid("()(())())")); // false
console.log(valid("((()))")); // true
console.log(valid(")(()))")); // false
console.log(valid("()()()()()()()()()()")); // true
console.log(valid("()()()()()()()()()()(")); // false
console.log(valid("(((()))))")); // true
console.log(valid("(((()))")); // false

// 13. 14 - Longest Common Prefix
//    Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0] || "";
  for (let str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""

// 14. 104 - Maximum Depth of Binary Tree
//    Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let maxDepth = 0;

  function dfs(node: TreeNode, depth: number) {
    if (!node.left && !node.right) {
      // leaft node
      maxDepth = Math.max(maxDepth, depth);
      return;
    }

    if (node.left) {
      dfs(node.left, depth + 1);
    }
    if (node.right) {
      dfs(node.right, depth + 1);
    }
  }

  dfs(root, 1);

  return maxDepth;
}
// 15. 200 - Number of Islands
//    Given an m x n 2D binary grid representing a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
//dfs

// 16. 128 - Longest Consecutive Sequence
//    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let streak = 1;
      while (numSet.has(num + 1)) {
        num++;
        streak++;
      }
      longestStreak = Math.max(longestStreak, streak);
    }
  }

  return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

// 17. 55 - Jump Game
//    You are given an integer array nums. You are initially positioned at the array's first index,
//  and each element represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
function canJump(nums: number[]): boolean {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    // If our current index is beyond the farthest point we could reach,
    // it means we are stuck.
    if (i > farthest) return false;

    // Update farthest to be the max of itself and the potential jump from here
    farthest = Math.max(farthest, i + nums[i]);

    // Optimization: if we can already reach the end, stop early
    if (farthest >= nums.length - 1) return true;
  }

  return farthest >= nums.length - 1;
}
// 18. 39 - Combination Sum
//    Given an array of distinct integers candidates and a target integer target,
//  return a list of all unique combinations where the chosen numbers sum to target.
//  You may use each number unlimited times.
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const combinations = new Set(); // 2,3,4

  function backtrack(path: number[], sum: number) {
    if (sum > target) return;
    if (sum === target) {
      const sortedPath = [...path].sort((a, b) => a - b);
      const key = sortedPath.join(",");
      if (!combinations.has(key)) {
        combinations.add(key);
        result.push([...path]);
        return;
      }
    }
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      path.push(candidate);
      sum += candidate;
      backtrack(path, sum);
      path.pop();
      sum -= candidate;
    }
  }

  backtrack([], 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

// 19. 102 - Binary Tree Level Order Traversal
//     Given the root of a binary tree, return its level order traversal
//  (i.e., from left to right, level by level).
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level: number[] = [];

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(level);
  }

  return res;
}
// 20. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells,
//  where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.

function wordExist(board: string[][], word: string): boolean {
  function dfs(
    i: number,
    j: number,
    idx: number,
    visited: Set<string>,
  ): boolean {
    if (visited.has(`${i}-${j}`)) return false;
    visited.add(`${i}-${j}`);
    if (idx === word.length - 1) return true;

    const directions = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ];

    for (let [ni, nj] of directions) {
      if (
        ni >= 0 &&
        ni < board.length &&
        nj >= 0 &&
        nj < board[0].length &&
        board[ni][nj] === word[idx + 1]
      ) {
        if (dfs(ni, nj, idx + 1, visited)) {
          return true;
        }
      }
    }
    visited.delete(`${i}-${j}`);

    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let visited = new Set<string>();
      if (board[i][j] === word[0])
        if (dfs(i, j, 0, visited)) {
          return true;
        }
    }
  }

  return false;
}

// true
console.log(
  wordExist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
);

// 21. 3 - Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
function lengthOfLongestSubstring(s: string): number {
  const charIndexSet = new Map<string, number>();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (charIndexSet.has(char)) {
      let duplicateIdx = charIndexSet.get(char)!;
      left = duplicateIdx + 1;
    }
    charIndexSet.set(char, right);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// 22. 424 - Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character and
// change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter after performing operations.
function characterReplacement(s: string, k: number): number {
  let longest = 0;
  let left = 0;
  const freqInWindow = new Map<string, number>();
  let maxFreqInWindow = 0;

  for (let right = 0; right < s.length; right++) {
    let curr = s[right];

    // Update frequency and track the global max frequency seen in any valid window
    freqInWindow.set(curr, (freqInWindow.get(curr) ?? 0) + 1);
    maxFreqInWindow = Math.max(maxFreqInWindow, freqInWindow.get(curr)!);

    // window length - maxFreq = count of "other" characters that has to be replaced <= k
    if (right - left + 1 - maxFreqInWindow > k) {
      let leftMostChar = s[left];
      freqInWindow.set(leftMostChar, freqInWindow.get(leftMostChar)! - 1);
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4

// 23 647 - Palindromic Substrings
//    Given a string s, return the number of palindromic substrings in it. A substring is a contiguous sequence of characters.
function countSubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    // odd
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      left--;
      right++;
      count++;
    }
    left = i;
    right = i + 1;
    //even
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      left--;
      right++;
      count++;
    }
  }
  return count;
}
console.log(countSubstrings("abc")); // Output: 3
console.log(countSubstrings("aaa")); // Output: 6

// 24 139 - Word Break
//  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a
// space-separated sequence of one or more dictionary words.
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) continue;
    for (let j = i + 1; j <= s.length; j++) {
      if (wordSet.has(s.slice(i, j))) dp[j] = true;
    }
  }
  return dp[s.length];
}
console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false

// 25 3713. Longest Balanced Substring I
// You are given a string s consisting of lowercase English letters.
// A substring of s is called balanced if all distinct characters
// in the substring appear the same number of times.
// Return the length of the longest balanced substring of s.
function longestBalanced(s: string): number {
  let maxLenght = 0;

  for (let i = 0; i < s.length; i++) {
    const freq: Map<string, number> = new Map();
    let maxFreq = 0;

    for (let j = i; j < s.length; j++) {
      let char = s[j];
      freq.set(char, (freq.get(char) ?? 0) + 1);
      maxFreq = Math.max(maxFreq, freq.get(char) ?? 0);
      if (j - i + 1 === maxFreq * freq.size) {
        maxLenght = Math.max(maxLenght, j - i + 1);
      }
    }
  }

  return maxLenght;
}

console.log(longestBalanced("abba")); // 4
console.log(longestBalanced("zzabccy")); // 4

// 26 3719. Longest Balanced Subarray I
// You are given an integer array nums.
// A subarray is called balanced if the number of distinct even
// numbers in the subarray is equal to the number of distinct odd numbers.
// Return the length of the longest balanced subarray.

function longestBalanced2(nums: number[]): number {
  let longestArrayLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let oddCount = 0;
    let evenCount = 0;
    for (let j = i; j < nums.length; j++) {
      let curr = nums[j];
      if (curr % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
      if (oddCount === evenCount) {
        longestArrayLength = Math.max(longestArrayLength, j - i + 1);
      }
    }
  }

  return longestArrayLength;
}

console.log(longestBalanced2([2, 5, 4, 3]));

// 27 76 - Minimum Window Substring
// Given two strings s and t, return the minimum window in s which will contain all
// the characters in t. If there is no such window in s that covers all characters in t,
// return the empty string "".
function minWindow(s: string, t: string): string {
  let minLength = Infinity;
  let minStart = 0;
  const freqInT = new Map();
  for (let char of t) {
    freqInT.set(char, (freqInT.get(char) ?? 0) + 1);
  }

  let validCharCount = 0;
  let left = 0;
  const freqInS = new Map();
  for (let right = 0; right < s.length; right++) {
    let curr = s[right];
    freqInS.set(curr, (freqInS.get(curr) ?? 0) + 1);
    if (freqInT.get(curr) && freqInS.get(curr) <= freqInT.get(curr)) {
      validCharCount++;
    }

    while (validCharCount === t.length) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }
      let leftMostChar = s[left];
      freqInS.set(leftMostChar, freqInS.get(leftMostChar)! - 1);

      if (
        freqInT.has(leftMostChar) &&
        freqInS.get(leftMostChar)! < freqInT.get(leftMostChar)!
      ) {
        validCharCount--;
      }
      left++;
    }
  }
  return s.substring(minStart, minStart + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
