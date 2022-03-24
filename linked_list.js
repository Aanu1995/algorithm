class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let current = this.head;
        let count = 0;

        while (current) {
            count += 1;
            current = current.nextNode;
        }
        return count;
    }

    add(data) {
        let newNode = new Node(data);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    search(key) {
        let current = this.head;
        while (current) {
            if (current.data === key) {
                return current;
            } else {
                current = current.nextNode;
            }
        }
        return null;
    }

    insert(data, index) {
        if (index === 0) {
            this.add(data);
        } else if (index > this.size()) {
            throw Error("Index out of bound");
        } else {
            let newNode = new Node(data);
            let position = index;
            let current = this.head;
            while (position > 0) {
                position -= 1;

                if (position === 0) {
                    let next = current.nextNode;
                    newNode.nextNode = next;
                    current.nextNode = newNode;
                    return;
                }
                current = current.nextNode;
            }
        }
    }
}

let list = new LinkedList();
list.add(24);
list.add(16);
list.add(18);
list.insert(47, 0);
console.log(list.size());
console.log(list.search(47));