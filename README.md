# Binary Search Trees

## Introduction

This project is a JavaScript implementation of a Binary Search Tree (BST) data structure, developed as part of the Computer Science module in [The Odin Project](https://www.theodinproject.com/) Full-Stack JavaScript path.

## Initial Goals

- Implement a balanced Binary Search Tree from scratch using JavaScript ES6 class syntax.
- Apply Test-Driven Development (TDD) methodology using Jest to ensure correctness.
- Understand core BST concepts: insertion, deletion, traversal, height, depth, and balancing.
- Build all required methods as specified by The Odin Project.

## Project Planning & Design

This project is a pure logic implementation with no UI. The architecture consists of two classes:

- **Node** — represents a single node in the BST, containing `data`, `left`, and `right` properties.
- **Tree** — represents the full BST, managing the `root` node and all tree operations.

The tree is built using a divide-and-conquer approach: sort the array, remove duplicates, find the middle element as root, and recursively build left and right subtrees — guaranteeing a balanced tree on initialization.

## Technologies Used

- JavaScript (ES6+)
- Jest (unit testing with TDD)
- Node.js
- Git & GitHub

## Completed Features

- `_buildTree(array)` — private method that recursively builds a balanced BST from a sorted array with no duplicates.
- `includes(value)` — returns true if the value exists in the BST, false otherwise.
- `insert(value)` — inserts a new node in the correct position. Does nothing if value already exists.
- `deleteItem(value)` — removes a node from the BST, handling all three cases: leaf node, one child, and two children (using inorder successor).
- `levelOrderForEach(callback)` — traverses the BST in breadth-first order and calls callback for each node's value.
- `inOrderForEach(callback)` — traverses in Left-Root-Right order (produces sorted output on BST).
- `preOrderForEach(callback)` — traverses in Root-Left-Right order.
- `postOrderForEach(callback)` — traverses in Left-Right-Root order.
- `height(value)` — returns the height of the node containing the given value (longest path to a leaf).
- `depth(value)` — returns the depth of the node containing the given value (distance from root).
- `isBalanced()` — checks if the BST is balanced by verifying every node's left and right subtree heights differ by no more than 1.
- `rebalance()` — rebalances an unbalanced BST by collecting values via inorder traversal and rebuilding the tree.

## Skills Demonstrated

- **Data Structures**: Implemented a Binary Search Tree from scratch, understanding nodes, pointers, and recursive tree structure.
- **Test-Driven Development (TDD)**: Wrote all tests before implementation using Jest, following the red → green → refactor cycle.
- **Recursion**: Applied recursive thinking extensively — `_buildTree`, `includes`, `deleteItem`, `inOrderForEach`, `preOrderForEach`, `postOrderForEach`, `height`, `isBalanced` all use recursion.
- **Algorithm Design**: Implemented BST deletion with inorder successor strategy, and balanced BST construction using divide-and-conquer.
- **Object-Oriented Programming**: Used ES6 class syntax with constructor, public methods, and private helper methods (`_buildTree`, `_checkBalance`, `_heightOfNode`).
- **BFS and DFS**: Implemented both breadth-first (level-order) and depth-first (inorder, preorder, postorder) traversal algorithms.

## Lessons Learned

- **Biggest challenge**: Implementing `deleteItem` for the case where a node has two children. The key insight is to find the inorder successor (smallest node in the right subtree), copy its data to the node being deleted, then recursively delete the successor — avoiding complex pointer manipulation.
- **Second challenge**: Implementing `isBalanced` correctly. A common mistake is only checking the root's children — the correct approach checks every node in the tree. Using -1 as a signal for "unbalanced" allows combining height calculation and balance checking in a single traversal.
- **General lesson**: Recursive thinking is essential for tree problems. Once you trust the recursive leap of faith — that the recursive call will correctly handle the subtree — the solution becomes much cleaner and easier to reason about.

## Credits

No external resources were used beyond The Odin Project curriculum and the JavaScript Algorithms and Data Structures Masterclass by Colt Steele (Sections 22–24: Binary Search Trees, Tree Traversal, Binary Heaps).

## Contact

- GitHub: [@BaoLong294](https://github.com/BaoLong294)
- Email: longbao2904@gmail.com
- LinkedIn: [Long Bảo](https://www.linkedin.com/in/long-b%E1%BA%A3o-a9226a377/)
