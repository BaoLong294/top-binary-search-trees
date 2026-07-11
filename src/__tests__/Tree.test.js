import { Node } from '../Node.js';
import { Tree } from '../Tree.js';

describe('Node', () => {
  it('should create default Node if with data', () => {
    let node = new Node(29);

    expect(node.data).toBe(29);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('Tree', () => {
  it('should create a balanced BST with root at mid', () => {
    const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
    expect(tree.root.data).toBe(4);
    expect(tree.root.left.data).toBe(2);
    expect(tree.root.right.data).toBe(6);
  });
});
