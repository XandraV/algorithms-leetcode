class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const list1 = new ListNode(1, new ListNode(2));
const list2 = new ListNode(1, new ListNode(3));
const list3 = new ListNode(3, new ListNode(8));
const list4 = new ListNode(14, new ListNode(5));

function mergeTwoLinkedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    // move the pointer to the next
    curr = curr.next;
  }
  // while loop continues only while both lists have nodes
  // once one of the lists runs out
  // we can attach the remaining nodes of the other list to the merged list
  if (!list1) curr.next = list2;
  if (!list2) curr.next = list1;
  return dummy.next;
}
console.log(mergeTwoLinkedLists(list1, list2)); // 1->1->2->3

// space complexity O(1) constant
// time complexity O(n+m) where n, m are the length of linked lists

function mergeKLinkedLists(lists: Array<ListNode | null>): ListNode | null {
  let res = null;
  for (let i = 0; i < lists.length; i++) {
    res = mergeTwoLinkedLists(res, lists[i]);
  }

  return res;
}

console.log(mergeKLinkedLists([list1, list2, list3, list4])); // 1->1->2->3->3->5->8->14
// time complexity O(kN) where k is the number of linked lists and N is the average length of each linked list
// space complexity O(1) constant