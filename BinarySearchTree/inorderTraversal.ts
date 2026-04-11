import { TreeNode } from "./TreeNode";

// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// left -> root -> right

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;
    if (node.left) {
      dfs(node.left);
    }
    res.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);
  return res;
}
