const { kthFromEnd, createLinkedList } = require('./kth');

describe('kthFromEnd', () => {
  test('should return the kth node from the end', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
    const kthNode = kthFromEnd(head, 3);
    expect(kthNode.value).toBe(5);
  });

  test('should return null for k greater than list length', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const kthNode = kthFromEnd(head, 7);
    expect(kthNode).toBeNull();
  });

  test('should return null for an empty list', () => {
    const head = createLinkedList([]);
    const kthNode = kthFromEnd(head, 2);
    expect(kthNode).toBeNull();
  });

  test('should return null')
  test('should return one where list is only one node', () => {
    const head = createLinkedList([1]);
    const kthNode = kthFromEnd(head, 1);
    expect(kthNode.value).toBe(1);
  });
});
