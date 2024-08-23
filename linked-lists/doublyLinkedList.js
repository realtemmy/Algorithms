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
    this.head.prev = newNode;
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
}

const myLinkedLists = new DoublyLinkedList(10);
myLinkedLists.append(5);
myLinkedLists.append(16);
myLinkedLists.prepend(1);
// myLinkedLists.reverse()
// myLinkedLists.insert(2, 4);
// myLinkedLists.remove(2);

console.log(myLinkedLists.printList());
// console.log(myLinkedLists);
