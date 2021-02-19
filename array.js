// const arr = [];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        ++this.length;
        return item;
    }
    pop() {
        const lastIndex = this.length - 1;
        const lastItem = this.data[lastIndex];
        delete this.data[lastIndex];
        --this.length;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.__shiftIndex(index);
        return item;
    }
    __shiftIndex(index) {
        for (let i = index; i < this.length; ++i) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        --this.length
    }
    shift() {
        const item = this.data[0];
        delete this.data[0];
        this.__shiftIndex(0);
        return item;
    }
    unshift(item) {
        this.__unshiftIndex();
        this.data[0] = item;
        return item;
    }
    __unshiftIndex() {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        ++this.length;
    }
}

let arr = new MyArray();
arr.push("Jose");
arr.push("Angela");
arr.push("Tomas");
console.log(arr);
arr.pop();
console.log(arr);
arr.push("Jose");
arr.push("Angela");
arr.push("Tomas");
console.log(arr);
console.log(arr.delete(2));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("Te amo"));
console.log(arr);