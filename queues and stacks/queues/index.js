// First in, first out

// enqueue - add data to the end of a queue
// dequeue - remove at the start of the queue
// peek - returns the value of the start of the queue
// empty - returns boolean

// We can use two stack to represent deque

class Queue {
  constructor() {
    (this.in = []), (this.out = []);
  }

  enqueue(value) {
    this.in.push(value);
    return this;
  }
  dequeue() {
    // pop from stack1 and push that same value to stack2
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }

    return this.out[this.out.length - 1];
  }
  empty() {
    return this.out.length && this.in.length;
  }
}

const myQueue = new Queue()

myQueue.enqueue(1);
myQueue.enqueue(2)
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.dequeue()


console.log(myQueue.peek())
