// Populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.
class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;
  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: _Node | null): _Node | null {
  // BFS + levelsize
  // if i = levelsize - 1 ->  null , else node.next = queue[0]
  if (root === null) return null;

  const queue: _Node[] = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (i == levelSize - 1) {
        curr!.next = null;
      } else {
        curr!.next = queue[0];
      }
      if (curr!.left) queue.push(curr!.left);
      if (curr!.right) queue.push(curr!.right);
    }
  }
  return root;
}

function connect2(root: _Node | null): _Node | null {
  if (!root || !root.left || !root.right) return root;

  // connect siblings
  root.left.next = root.right;

  // connect across parents
  if (root.next) {
    root.right.next = root.next.left;
  }

  // recurse
  connect2(root.left);
  connect2(root.right);

  return root;
}
