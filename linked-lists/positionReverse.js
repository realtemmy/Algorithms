const positionReverseList = (head, m = 3, n = 5) => {
  // 1 - 2 - 3 - 4 - 5 - 6 - 7
  let start,
    tail,
    currentNode = head,
    prev = null, // 5 - 4 - 3 - null
    count = 1,
    next;

  while (count <= n) {
    if (count < m) {
      if (count === m - 1) {
        start = currentNode;
      }
      currentNode = currentNode.next;
    } else {
      if(count === m) {
        tail = currentNode;
      }
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    count++;
  }
  prev.next = currentNode; //error here
  start.next = prev
};
