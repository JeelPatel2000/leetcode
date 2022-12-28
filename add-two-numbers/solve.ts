export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Input: l1 = [9,9,9,9,9,9,9],
// 				l2 = [9,9,9,9]
// Output:l3 = [8,9,9,9,0,0,0,1]

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null || l2 === null) return null;

  const tempHead = new ListNode();
  let l3 = tempHead;
  let carry = 0;
  let sum = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;
    sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    l3.next = new ListNode(sum % 10); // only store the remainder
    l3 = l3.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return tempHead.next;
}
