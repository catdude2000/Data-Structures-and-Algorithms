const { breadthFirst, BTNode } = require('./treebreadth'); // Replace with your actual code file path

describe('Breadth First Traversal', () => {
  it('should traverse the tree in breadth-first order', () => {
    const tree = new BTNode(1,
      new BTNode(2, new BTNode(4), new BTNode(5)),
      new BTNode(3, null, new BTNode(6))
    );
    const result = breadthFirst(tree);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('should handle empty trees', () => {
    const emptyTree = null;
    const result = breadthFirst(emptyTree);
    expect(result).toEqual(null);
  });
});
