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

  describe('includes', () => {
    it('should return false if tree is not including the value', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(0)).toBeFalsy();
      expect(tree.includes(8)).toBeFalsy();
    });

    it('should return true if tree is including the value', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(1)).toBeTruthy();
      expect(tree.includes(7)).toBeTruthy();
    });
  });
});
