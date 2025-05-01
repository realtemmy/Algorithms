class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return;
        }
      }
    }
    this.root = currentNode;
    return this;
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        // returns the value of the currentNode
        return currentNode;
      } else if (currentNode.value < value) {
        // to the right
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  remove(value) {
    // 1. find the value in the tree
    // 2. find the smallest value to the right of the current node
    // 3. Let  smallestNode point to prev node before value
  }
}

//        8
//    5       10
// 4    7   9    11
// insert - 6
const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(5);
tree.insert(7);
tree.insert(4);
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.insert(12);
tree.insert(6)

console.log(tree.lookup(8));
// console.log(tree);
// console.log(JSON.stringify(tree));
