// Given the root of a binary tree, return the level order traversal of its nodes' values.
//  (i.e., from left to right, level by level).
// BFS plus level tracking
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
