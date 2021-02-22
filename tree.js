class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    __setNode(condition, view, node) {
        if (condition) view.left = node;
        else view.right = node;
        return view;
    }
    __findingPlace(view, node) {
        if(node.value === view.value) return;
        const isSmaller = node.value < view.value;
        const viewSon = isSmaller ? view.left : view.right;
        const hasFoundPlace = !viewSon;
        return hasFoundPlace 
                ? this.__setNode(isSmaller, view, node) 
                : this.__findingPlace(viewSon, node);
    }
    insert(value) {
        const node = new Node(value);
        if(!this.root) this.root = node;
        else this.__findingPlace(this.root, node);
        return this;
    }
    search(value, view=this.root) {
        if (!view) return;
        if (view.value === value) return view;
        const son = value < view.value ? view.left : view.right;
        return this.search(value, son);
    }
    __getTargetsParent(target, view=this.root) {
        const isSmaller = target.value < view.value;
        let viewSon = isSmaller ? view.left : view.right;
        if (viewSon.value === target.value) isSmaller ? view.left = null : view.right = null;
        else this.__getTargetsParent(target, viewSon);
    }
    delete(value) {
        const target = this.search(value);
        if (target) {
            if (target === this.root) this.root = null;
            else this.__getTargetsParent(target)
        }
        return target
    }
}

let tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(4));
console.log(tree.insert(15));
console.log('>>>', tree.insert(10));
console.log(tree.insert(16));
console.log(tree.insert(14));
console.log(tree.insert(1));
console.log(tree.insert(5));
console.log(tree.insert(10));
console.log('Search:', tree.search(5));
console.log('Delete:', tree.delete(10));
console.log('Insert:', tree.insert(100));
console.log('All:', tree);


// Insert interativly not null tree node.
// while (true) {
//     if (value < view.value) {
//         if (!view.left) {
//             view.left = node;
//             return this;
//         }
//         view = view.left;
//     } else {
//         if (!view.right) {
//             view.right = node;
//             return this;
//         }
//         view = view.right;
//     }
// }