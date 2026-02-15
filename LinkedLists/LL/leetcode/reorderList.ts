// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes.
// Only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  // Step 1: find middle
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: reverse second half
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow.next;
  slow.next = null; // cut first half

  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Step 3: merge
  let first: ListNode | null = head;
  let second: ListNode | null = prev;

  while (second !== null) {
    const temp1 = first!.next;
    const temp2 = second.next;

    first!.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
}
