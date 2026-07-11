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

  describe('insert', () => {
    it('should set the node with this value as the root', () => {
      const tree = new Tree([]);
      tree.insert(29);

      expect(tree.includes(29)).toBeTruthy();
    });

    it('should insert the node with this value in the correct spot', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      tree.insert(29);

      expect(tree.includes(29)).toBeTruthy();
    });

    it('should do nothing if value already exists', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      tree.insert(4);

      expect(tree.includes(4)).toBeTruthy();
    });
  });

  describe('deleteItem', () => {
    it('should remove leaf node', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      tree.deleteItem(1);

      expect(tree.includes(1)).toBeFalsy();
    });

    it('should remove node has 1 child', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
      tree.deleteItem(8);

      expect(tree.includes(8)).toBeFalsy();
    });

    it('should remove node has 2 childs', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
      tree.deleteItem(6);

      expect(tree.includes(6)).toBeFalsy();
    });

    it('should do nothing if the value is not exists', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      tree.deleteItem(8);

      expect(tree.includes(8)).toBeFalsy();
    });
  });

  describe('levelOrderForEach', () => {
    it('should push each element into an array', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      const array = [];
      tree.levelOrderForEach((value) => array.push(value));

      expect(array).toEqual([4, 2, 6, 1, 3, 5, 7]);
    });

    it('should throw Error if no callback is provided', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(() => tree.levelOrderForEach()).toThrow(Error);
    });
  });

  describe('inOrderForEach', () => {
    it('should traverse in order and call callback', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      const result = [];
      tree.inOrderForEach((value) => result.push(value));

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should throw Error if no callback is provided', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(() => tree.inOrderForEach()).toThrow(Error);
    });
  });

  describe('preOrderForEach', () => {
    it('should traverse preorder and call callback', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      const result = [];
      tree.preOrderForEach((value) => result.push(value));

      expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
    });

    it('should throw Error if no callback is provided', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(() => tree.preOrderForEach()).toThrow(Error);
    });
  });

  describe('postOrderForEach', () => {
    it('should traverse postorder and call callback', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      const result = [];
      tree.postOrderForEach((value) => result.push(value));

      expect(result).toEqual([1, 3, 2, 5, 7, 6, 4]);
    });

    it('should throw Error if no callback is provided', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(() => tree.postOrderForEach()).toThrow(Error);
    });
  });

  describe('height', () => {
    it('should return 0 if the value at the leaf', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(tree.height(3)).toBe(0);
    });

    it('should return 1 if the value above the leaf', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(tree.height(6)).toBe(1);
    });

    it('should return 2 for root node', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(tree.height(4)).toBe(2);
    });

    it('should return undefined if value does not exist', () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      expect(tree.height(8)).toBeUndefined();
    });
  });
});
