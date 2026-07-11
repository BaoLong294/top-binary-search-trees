import { Node } from './Node.js';

export class Tree {
  constructor(array) {
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    this.root = this._buildTree(sorted);
  }

  _buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    let node = new Node(array[mid]);

    node.left = this._buildTree(array.slice(0, mid));
    node.right = this._buildTree(array.slice(mid + 1));

    return node;
  }

  include(value) {}
}
