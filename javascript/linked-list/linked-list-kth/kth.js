class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function kthFromEnd(head, k) {
  if (!head || k <= 0) {
    return null;
  }

  let slowPointer = head;
  let fastPointer = head;

  for (let i = 0; i < k; i++) {
    if (!fastPointer) {
      return null;
    }
    fastPointer = fastPointer.next;
  }

  while (fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }
  return slowPointer;
}

function createLinkedList(values) {
  if (!values || values.length === 0) {
    return null;
  }

  const head = new Node(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new Node(values[i]);
    current = current.next;
  }
  return head;
}

module.exports = { Node, kthFromEnd, createLinkedList };
