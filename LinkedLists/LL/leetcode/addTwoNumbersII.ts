// You are given two non-empty linked lists representing two non-negative integers.
// The most significant digit comes first and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Could use addTwoNumbers from addTwoNumbers.ts + reverseLinkedList
// by reversing the lists firs, add the two lists and then reversing the result

// Alternative approach using stacks if you want to avoid modifying the input lists,
// 1.push digits of each list into a stack
// 2. pop from stacks to add from least significant digit
// 3. build result from the front
// this works because stacks reverse order implicitly
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const s1: number[] = [];
  const s2: number[] = [];

  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let head: ListNode | null = null;

  while (s1.length > 0 || s2.length > 0 || carry > 0) {
    const sum = (s1.pop() ?? 0) + (s2.pop() ?? 0) + carry;

    carry = Math.floor(sum / 10);

    const node = new ListNode(sum % 10);
    node.next = head;
    head = node;
  }

  return head;
}
