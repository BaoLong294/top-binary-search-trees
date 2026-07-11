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

  includes(value, node = this.root) {
    if (!node) return false;

    if (value === node.data) return true;
    else if (value < node.data) return this.includes(value, node.left);
    else return this.includes(value, node.right);
  }

  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.data) return undefined;

      if (value < current.data) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  deleteItem(value, node = this.root) {
    if (!node) return null;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
      return node;
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
      return node;
    } else {
      if (!node.left && !node.right) return null;
      else if ((!node.left && node.right) || (node.left && !node.right)) {
        return node.left || node.right;
      } else {
        let min = node.right;
        while (min.left) min = min.left;
        node.data = min.data;
        node.right = this.deleteItem(min.data, node.right);
        return node;
      }
    }
  }

  levelOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('Required callback function');

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback) {
    if (typeof callback !== 'function') throw new Error('Required callback');

    function traverse(node, callback) {
      if (!node) return;

      traverse(node.left, callback);
      callback(node.data);
      traverse(node.right, callback);
    }

    traverse(this.root, callback);
  }

  preOrderForEach(callback) {
    if (typeof callback !== 'function') throw new Error('Required callback');

    function traverse(node, callback) {
      if (!node) return;

      callback(node.data);
      traverse(node.left, callback);
      traverse(node.right, callback);
    }

    traverse(this.root, callback);
  }

  postOrderForEach(callback) {
    if (typeof callback !== 'function') throw new Error('Required callback');

    function traverse(node, callback) {
      if (!node) return;

      traverse(node.left, callback);
      traverse(node.right, callback);
      callback(node.data);
    }

    traverse(this.root, callback);
  }
}
