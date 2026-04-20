import { TreeNode } from "./TreeNode";
// 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the
// right side of it, return the values of the nodes you can see ordered from top to bottom.

// BFS to track level and for each level, take the rightmost node
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;

      // last node in this level = right side view
      if (i === size - 1) {
        res.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
}
