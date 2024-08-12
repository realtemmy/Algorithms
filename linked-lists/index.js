// 10 --> 5 --> 16

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    // add to the beginning
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    // 1 --> 10 --> 5 --> 16
    let newNode = {
      value: value,
      next: null,
    };
    let prevNode = this.head;
    while (index > 1) {
      prevNode = prevNode.next;
      index--;
    }
    let afterNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = afterNode;
    this.length++;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index > this.length) {
      throw new Error("Maximum length of list exceeded");
    }
    // 1 - 10 - 4 - 5 - 16
    let prevNode = this.traverseToIndex(index - 1);
    let afterNode = this.traverseToIndex(index + 1);
    prevNode.next = afterNode;
    this.length--;
  }

  reverse(){
     let currentNode = this.head;
     let prev = null
     while(currentNode){
      let next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next
     }
     this.head = prev;
  }
}

class DoublyLinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      prev: null,
      next: null,
    }),
      (this.tail = this.head),
      (this.length = 1);
  }
  append(value) {
    const newNode = {
      value: value,
      prev: null,
      next: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
}

// const myLinkedLists = new DoublyLinkedList(10);
const myLinkedLists = new LinkedList(10)
myLinkedLists.append(5);
myLinkedLists.append(16);
myLinkedLists.prepend(1);
myLinkedLists.reverse()
// myLinkedLists.insert(2, 4);
// myLinkedLists.remove(2);

console.log(myLinkedLists.printList());
// console.log(myLinkedLists);
