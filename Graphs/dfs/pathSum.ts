// 113. Path Sum II
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf
// paths where the sum of the node values in the path equals targetSum.
//  Each path should be returned as a list of the node values, not node references.
// A root-to-leaf path is a path starting from the root and ending at any leaf node.
// A leaf is a node with no children.

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];

  function backtrack(node: TreeNode | null, path: number[], sum: number) {
    if (!node) return;
    sum += node.val;
    path.push(node.val);
    if (!node.left && !node.right && sum === targetSum) {
      result.push([...path]);
    }

    backtrack(node.left, path, sum);

    backtrack(node?.right, path, sum);

    path.pop();
  }

  backtrack(root, [], 0);
  return result;
}
