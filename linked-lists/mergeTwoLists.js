// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// list1 = 1 - 2 - 4
// list2 = 1 - 3 - 4

// answer = 1 - 1 - 2 - 3 - 4 - 4

const mergeTwoLists = function (list1, list2) {
  const merged = new ListNode(); //0 - X       ||  X = 1 - 1 - 2
  let currentNode = merged;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next
  }
  currentNode.next = list1 || list2
  return merged.next
};
