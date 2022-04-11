class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    insert(data) {
        this.length++;
        const current = this.root;

        if (!current) {
            this.root = new Node(data);
        } else {
            const searchTree = function (current) {
                if (data < current.data) {
                    if (!current.left) {
                        return current.left = new Node(data);
                    } else {
                        return searchTree(current.left);
                    }
                } else if (data > current.data){
                     if (!current.right) {
                        return current.right = new Node(data);
                    } else {
                        return searchTree(current.right);
                    }
                } else {
                    return null;
                }
            }

            return searchTree(current);
        }

    }

    findMin() {
        let current = this.root;
        while (current && current.left) {
            current = current.left;
        }
        return current?.data;
    }

    findMax() {
        let current = this.root;
        while (current && current.right) {
            current = current.right;
        }
        return current?.data;
    }

    find(data) {
        let current = this.root;
        while (current && current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current;
    }

    contains(data) {
        let current = this.find(data);

        if (data === current?.data) {
            return true;
        } else {
            return false;
        }
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (!node) {
                return null;
            } else if (data === node.data) {
                // node has no children
                if (!node.left && !node.right) {
                    return null;
                } else if (!node.left) { // node has no left children
                    return node.right;
                } else if (!node.right) { // node has no right children
                    return node.left;
                }

                // node has two children
                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

let list = new BST();
list.insert(24);
list.insert(16);
list.insert(18);
list.insert(2);
list.insert(20);
list.insert(1);

console.log(list.findMin());
console.log(list.findMax());
list.remove(1)
console.log(list.findMin());