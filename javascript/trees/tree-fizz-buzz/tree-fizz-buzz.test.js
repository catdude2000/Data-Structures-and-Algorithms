const { TreeNode, fizzBuzzKaryTree } = require('./tree-fizz-buzz'); // Update the path accordingly

describe('FizzBuzz K-ary Tree Traversal', () => {
  test('Test case 1', () => {
    const rootNode = new TreeNode(1);
    rootNode.children.push(new TreeNode(2), new TreeNode(3), new TreeNode(4));
    rootNode.children[1].children.push(new TreeNode(5), new TreeNode(6));

    const k = 3;

    const fizzBuzzTree = fizzBuzzKaryTree(rootNode, k);

    const expectedOutput = [
      ['1'],
      ['2', 'Fizz', '4'],
      ['Buzz', 'Fizz', 'Fizz']
    ];

    expect(fizzBuzzTree).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});
