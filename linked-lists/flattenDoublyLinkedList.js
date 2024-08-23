// Node structure
class Node {
  constructor(value) {
    (this.value = value),
      (this.next = null),
      (this.prev = null),
      (this.child = null);
  }
}
// 1 - 2 - 3 - 4 - 5 - 6 - null
//     7 - 8 - 9 - null
//        10 - 11 - null

// to give 1 - 2 - 7 - 8 - 10 - 11 - 9 - 3 - 4 - 5 - 6 - null
const flattenDoublyLinkedList = (head) => {
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child !== null) {
      let childNode = currentNode.child;
      let end = childNode;
      while (end.next !== null) {
        end = end.next;
      }
      if (currentNode.next !== null) {
        end.next = currentNode.next;
        end.next.prev = end;
      }
      currentNode.next = childNode;
      childNode.prev = currentNode;
      currentNode = currentNode.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return currentNode;
};
