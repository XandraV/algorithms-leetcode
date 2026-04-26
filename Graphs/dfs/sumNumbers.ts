import { TreeNode } from "../TreeNode";

// 129. Sum Root to Leaf Numbers
// You are given the root of a binary tree containing digits from 0 to 9 only.
// Each root-to-leaf path in the tree represents a number.
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// Using strings might be inefficient
function sumNumbers(root: TreeNode | null): number {
  let sum = 0;

  function dfs(node: TreeNode | null, path: string) {
    if (!node) return;
    path += node.val;
    if (node.left === null && node.right === null) {
      sum += Number(path); // 12
      return;
    }

    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);
  }

  dfs(root, "");

  return sum;
}
// Best solution
function sumNumbers2(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, current: number): number {
    if (!node) return 0;

    // build number
    current = current * 10 + node.val;

    // if leaf → return the number
    if (!node.left && !node.right) {
      return current;
    }

    // sum from left + right
    return dfs(node.left, current) + dfs(node.right, current);
  }

  return dfs(root, 0);
}
