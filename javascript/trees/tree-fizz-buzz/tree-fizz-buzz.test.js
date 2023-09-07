const { KaryTreeNode, fizzBuzzKaryTree } = require('./tree-fizz-buzz');

describe('FizzBuzz K-ary Tree Traversal', () => {
  test('happy path', () => {
    const originalTree = new KaryTreeNode(15, [
      new KaryTreeNode(9, [new KaryTreeNode(6)]),
      new KaryTreeNode(10),
    ]);
    const modifiedTree = fizzBuzzKaryTree(originalTree);
    expect(modifiedTree.value).toBe('FizzBuzz');
    expect(modifiedTree.children[0].value).toBe('Fizz');
    expect(modifiedTree.children[1].value).toBe('Buzz');
  });
  test('Should fail', () => {
    const originalTree = new KaryTreeNode(7, [new KaryTreeNode(11)]);
    const modifiedTree = fizzBuzzKaryTree(originalTree);
    expect(modifiedTree.value).toBe(7);
    expect(modifiedTree.children[0].value).toBe(11);
  });

});
