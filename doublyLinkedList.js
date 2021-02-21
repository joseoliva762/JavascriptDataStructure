class Node {
    constructor(value) {
        this.value  = value;
        this.next = null;
        this.prev = null;
    }
}
class MySinglyLinkedList {
    constructor(value) {
        this.head = new Node(value); 
        this.tail = this.head;
        this.length = 1;
    }
    // append
    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = this.tail.next;
        
        ++this.length;
        return this;
    }
    // prepend
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = this.head.prev;
        ++this.length;
        return this;
    }
    __getView(index, view) {
        for (let i = 0; i < index - 1; i++) view = view.next;
        return view;
    }
    // insert
    insert(index, value) {
        const node = new Node(value);
        if (!index) this.prepend(value);
        else if(index >= this.length) this.append(value);
        else {
            let view = this.__getView(index, this.head);
            let target = view.next;
            node.next = target;
            node.prev = view;
            view.next = node;
            target.prev = node;
            ++this.length;
        }
        return this;
    }
    // search
    search(value) {
        let view = this.head;
        while (view.value !== value) {
            view = view.next;
        }
        return view;
    }
    // delete
    delete(index) {
        let deletedNode;
        if (index > this.length || this.length <= 1) return;
        if (!index) {
            deletedNode = {...this.head};
            this.head.next = null;
            this.head = deletedNode.next;
            this.head.prev = null;
        } else if (index === this.length - 1){
            deletedNode = this.tail;
            this.tail = deletedNode.prev;
            this.tail.next = null;
        } else {
            let view = this.__getView(index, this.head);
            deletedNode = view.next;
            let target = deletedNode.next;
            view.next = target;
            target.prev = view;
        }
        deletedNode.next = null;
        deletedNode.prev = null;
        --this.length;
        return deletedNode;
    }
    forEach(callback) {
        let view = this.head;
        let index = 0;
        while(view.next) {
            callback(view.value, index++, this.head, this.length);
            view = view.next;
        }
    }
}


let list = new MySinglyLinkedList(12);
console.log('Init', list);
list.append(10);
list.append(1997);
list.append(14);
list.append(3);
// list.append(1999);
// console.log('Append', list);
// list.prepend(314);
// console.log('Preppend', list);
// list.insert(0, 123);
// list.insert(1, 1234);
// list.insert(list.length + 1, 12345);
// console.log('Insert', list);
// console.log("Search", list.search(10));
// console.log(list.delete(1));
// console.log("Delete", list);
// console.log(list.delete(0));
// console.log("Delete", list);
// console.log(list.delete(list.length + 1));
// console.log("Delete", list);
list.forEach((element, index) => {
    element = element * 2;
    console.log(`Element ${index + 1}:`, element);
});
