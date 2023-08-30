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

  let slowPoint = head;
  let fastPoint = head;

  // Move fastPtr k nodes ahead
  for (let i = 0; i < k; i++) {
    if (!fastPoint) {
      return null; // List length is less than k
    }
    fastPoint = fastPoint.next;
  }

  // Move slowPtr and fastPoint together until fastPoint reaches the end
  while (fastPoint) {
    slowPoint = slowPoint.next;
    fastPoint = fastPoint.next;
  }

  return slowPoint;
}

// Helper function to create a linked list from an array of values
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

// Example usage
const values = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const head = createLinkedList(values);
const kthNode = kthFromEnd(head, k);

if (kthNode) {
  console.log(`The ${k}th node from the end is: ${kthNode.value}`);
} else {
  console.log(`The list is too short to find the ${k}th node from the end.`);
}

module.exports = { Node, kthFromEnd, createLinkedList };
