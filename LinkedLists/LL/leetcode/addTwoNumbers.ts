// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let dummy = new ListNode();
  let res = dummy;
  let carry = 0;

  let temp1 = l1;
  let temp2 = l2;

  while (temp1 !== null || temp2 !== null) {
    let val1 = temp1 ? temp1.val : 0;
    let val2 = temp2 ? temp2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    res.next = new ListNode(sum);
    res = res.next;

    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }

  if (carry > 0) {
    res.next = new ListNode(carry);
  }

  return dummy.next;
}
