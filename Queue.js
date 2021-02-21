// Queue, FIFO
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() { return this.first; }

    enqueue(value) {
        const node = new Node(value);
        if (!this.length) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        ++this.length;
        return this;
    }
    dequeue() {
        const deletedNode = this.peek();
        if (!deletedNode) return;
        this.first = deletedNode.next;
        deletedNode.next = null;
        --this.length;
        if(!this.length) this.last = null;
        return deletedNode;
    }
}

let queue = new Queue();
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log("dequeue: ", queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log('>>>>', queue.enqueue(6));
console.log(queue.dequeue());
console.log(queue);
console.log('>>>>', queue.enqueue(6));
console.log('>>>>', queue.enqueue(7));
console.log(queue);