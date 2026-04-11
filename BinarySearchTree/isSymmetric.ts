import { TreeNode } from "./TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return false;
  // for symmetry, you need to compare:

  // The left child's left with the right child's right
  //The left child's right with the right child's left
  function dfs(
    leftChild: TreeNode | null,
    rightChild: TreeNode | null,
  ): boolean {
    if (leftChild === null && rightChild === null) {
      return true;
    }
    if (leftChild === null || rightChild === null) {
      return false;
    }
    if (leftChild.val !== rightChild.val) {
      return false;
    }

    return (
      dfs(leftChild.left, rightChild.right) &&
      dfs(leftChild.right, rightChild.left)
    );
  }

  return dfs(root.left, root.right);
}
