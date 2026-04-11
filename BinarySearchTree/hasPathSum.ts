import { TreeNode } from "./TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null && targetSum === 0) return false;
  if (root === null) return false;

  function sum(node: TreeNode | null, currSum: number): boolean {
    if (node) {
      currSum += node.val;

      if (!node.left && !node.right) {
        return currSum === targetSum;
      }

      if (node.left) {
        if (sum(node.left, currSum)) return true;
      }

      if (node.right) {
        if (sum(node.right, currSum)) return true;
      }
    }
    return false;
  }

  return sum(root, 0);
}
