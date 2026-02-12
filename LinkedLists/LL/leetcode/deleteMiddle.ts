// 2095. Delete the Middle Node of a Linked List
// You are given the head of a linked list.
// Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th
// node from the start using 0-based indexing, where ⌊x⌋ denotes the
// largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

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

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;
  const dummy = new ListNode(0, head);
  let slow: ListNode | null = dummy;
  let fast: ListNode | null = head;
  // slow = slow.next;
  // fast = fast.next.next

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
