class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

// ============== Stack using LinkedLists
class Stack {
  // Stack - last in, first out
  constructor() {
    this.top = null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    // return the first value ie head
    return this.top.value;
  }
  push(value) {
    // pushing to the top
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return (this.top = this.top.next);
  }
  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}

// =========== Stack implementation using Arrays ================
class Stack {
  constructor() {
    this.top = [];
  }
  peek() {
    return this.top[this.top.length - 1];
  }
  push(value) {
    const head = this.top;
    const newValue = [...head, value];
    this.top = newValue;
    return this
  }
  pop() {
    this.top.pop()
    return this
  }
  isEmpty() {
    if (this.top.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.pop()
console.log(myStack.peek());
console.log(myStack);
