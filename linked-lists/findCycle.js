// Using Floyd tortoise and hare's algorithm: to detect cycle in a linked list
// tortoise moves a step while hare moves two steps per iteration..
// if tortoise and hare meets, the linkedlist has a cycle
const findCycle = function (head) {
  let hare = head,
    tortoise = head;
  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;
    if (hare === null || hare.next === null) {
      return false;
    } else {
      tortoise = tortoise.next;
    }

    if (hare === tortoise) break;
  }
  //To  find the node that started the cycle
  let p1 = head,
    p2 = tortoise;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
};
