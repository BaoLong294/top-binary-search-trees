import { Tree } from './Tree.js';

// Bước 1: Tạo BST từ mảng số ngẫu nhiên < 100
const randomArray = Array.from({ length: 15 }, () =>
  Math.floor(Math.random() * 100)
);
const tree = new Tree(randomArray);

// Bước 2: Confirm cây balanced
console.log('Is balanced:', tree.isBalanced());

// Bước 3: Print tất cả elements theo level, pre, post, in order
const levelOrder = [];
const preOrder = [];
const postOrder = [];
const inOrder = [];

tree.levelOrderForEach((v) => levelOrder.push(v));
tree.preOrderForEach((v) => preOrder.push(v));
tree.postOrderForEach((v) => postOrder.push(v));
tree.inOrderForEach((v) => inOrder.push(v));

console.log('Level order:', levelOrder);
console.log('Pre order:', preOrder);
console.log('Post order:', postOrder);
console.log('In order:', inOrder);

// Bước 4: Unbalance cây bằng cách thêm số > 100
tree.insert(101);
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);

// Bước 5: Confirm cây unbalanced
console.log('Is balanced after inserting:', tree.isBalanced());

// Bước 6: Rebalance
tree.rebalance();

// Bước 7: Confirm cây balanced lại
console.log('Is balanced after rebalance:', tree.isBalanced());

// Bước 8: Print lại tất cả elements
const levelOrder2 = [];
const preOrder2 = [];
const postOrder2 = [];
const inOrder2 = [];

tree.levelOrderForEach((v) => levelOrder2.push(v));
tree.preOrderForEach((v) => preOrder2.push(v));
tree.postOrderForEach((v) => postOrder2.push(v));
tree.inOrderForEach((v) => inOrder2.push(v));

console.log('Level order:', levelOrder2);
console.log('Pre order:', preOrder2);
console.log('Post order:', postOrder2);
console.log('In order:', inOrder2);
