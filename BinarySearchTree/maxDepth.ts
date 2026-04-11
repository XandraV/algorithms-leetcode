// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  // Recursive case: the depth is 1 (for the current node) plus the max of the two subtrees.
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// updates maxDepth at every null child (which includes internal nodes with one child), 
// and uses a closure variable.
function maxDepth2(root: TreeNode | null): number {
  let maxDepth = 0;
  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      maxDepth = Math.max(maxDepth, depth);
      return;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return maxDepth;
}

