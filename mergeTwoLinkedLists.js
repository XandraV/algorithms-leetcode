// https://www.youtube.com/watch?v=eQGn1xbt1JU
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = new ListNode(1, new ListNode(2));
const list2 = new ListNode(1, new ListNode(3));

function mergeTwoLists(list1, list2) {
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
    // move the pointer to the next otherwise the previous(or current at this point) will be overwritten
    curr = curr.next;
  }
  if (!list1) curr.next = list2;
  if (!list2) curr.next = list1;
  return dummy.next;
}
console.log(mergeTwoLists(list1, list2));
