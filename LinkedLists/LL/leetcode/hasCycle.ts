// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
// There is a cycle in a linked list if there is some node in the list
// that can be reached again by continuously following the next pointer.
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow.next !== null && fast !== null && fast.next !== null) {
    slow = slow?.next;
    fast = fast?.next.next;
    if (slow == fast) return true;
  }

  return false;
}
