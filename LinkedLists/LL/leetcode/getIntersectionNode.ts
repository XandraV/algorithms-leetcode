// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// HashSet approach O(m+n) time | O(m) space
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  const visited = new Set();
  let currA = headA;
  while (currA) {
    visited.add(currA);
    currA = currA.next;
  }

  let currB = headB;
  while (currB) {
    if (visited.has(currB)) {
      return currB;
    }
    currB = currB.next;
  }

  return null;
}

// A: [----x----|=====]
// B:     [--y--|=====]
// Person A walks: A then B
// Person B walks: B then A
// They both walk exactly the same total distance.
// If there is a shared segment: They must arrive at it at the same time
// If there isn’t: They both end up at null together
// Two pointers approach O(m+n) time | O(1) space
function getIntersectionNode2(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}
