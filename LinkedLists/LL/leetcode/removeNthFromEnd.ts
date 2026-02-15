// 19. Remove Nth Node From End of List
// Given the head of a linked list,
// remove the nth node from the end of the list and return its head.

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let slow: ListNode | null = dummy;
  let fast: ListNode | null = dummy;

  // Move fast n steps
  for (let i = 0; i < n; i++) {
    fast = fast!.next;
  }

  // Move together
  while (fast!.next !== null) {
    slow = slow!.next;
    fast = fast!.next;
  }

  // Remove
  slow!.next = slow!.next!.next;

  return dummy.next;
}
