// Staks: LIFO.
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        if (value) this.push(value);
    }

    peek() { return this.top; }

    push(value) {
        const node = new Node(value);
        if (!this.length) {
            this.top = this.bottom = node;
        } else {
            const holder = this.top;
            this.top = node;
            this.top.next = holder;
        }
        ++this.length;
        return this;
    }
    
    pop() {
        const deletedTop = this.peek();
        if (!deletedTop) return;
        this.top = deletedTop.next;
        deletedTop.next = null;
        --this.length;
        if(!this.length) this.bottom = null;
        return deletedTop;
    }
}

let stack = new Stack(3);
stack.push(5);
stack.push(15);
stack.push(25);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);