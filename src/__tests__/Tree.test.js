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
