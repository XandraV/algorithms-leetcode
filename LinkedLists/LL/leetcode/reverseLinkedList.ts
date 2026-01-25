// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let prev: ListNode | null = null;
  let temp: ListNode | null = head;
  let next: ListNode | null = null;

  while (temp !== null) {
    next = temp.next;
    temp.next = prev;
    prev = temp; // the head of the reversed portion so far
    temp = next;
  }

  return prev;
}
