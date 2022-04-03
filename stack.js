class Node {
    constructor(data, nextNode) {
        this.data = data;
        this.nextNode = nextNode;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
    }

    unshift(data) {
        this.head = new Node(data, this.head);
        this.length++;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let current = this.head;
        while (current && current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length === 0;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    shift() {
        const current = this.head;
        if (current) {
            this.head = current.nextNode;
            this.length--;
        }
        return current;
    }

    pop() {
        let current = this.head;
        if (!current) {
            return null;
        } else if (this.length === 1) {
            return this.shift();
        } else {
            const lastNode = this.getLast();
            while (current.nextNode !== lastNode) {
                current = current.nextNode;
            }

            current.nextNode = null;
            this.length--;
            return lastNode;
        }
    }

    push(data) {
        let current = this.head;
        if (!current) {
            this.unshift(data);
        } else {
            let lastNode = this.getLast();
            lastNode.nextNode = new Node(data);
            this.length++;
        }
    }

    getItem(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let counter = 0;
            let current = this.head;
            while (counter < index) {
                current = current.nextNode;
                counter++;
            }
            return current;
        }
    }

    setItem(index, data) {
        if (index < 0 || index >= this.length) {
            return false;
        } else {
            let exactNode = this.getItem(index);
            exactNode.data = data;
            return true;
        }
    }

    removeItem(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            return this.shift();
        } else {
            let prevNode = this.getItem(index - 1);
            let exactNode = this.getItem(index);
            prevNode.nextNode = prevNode.nextNode.nextNode;
            this.length--;
            return exactNode;
        }
    }

    insert(index, data) {
        if (index < 0 || index >= this.length) {
            return false;
        } else if(index === 0) {
            this.unshift(data);
            return true;
        } else {
            let prevNode = this.getItem(index - 1);
            prevNode.nextNode = new Node(data, prevNode.nextNode);
            this.length++;
            return true;
        }
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            } else {
                current = current.next;
            }
        }
        return null;
    }
}




class Stack {
    constructor() {
        this.datastore = new LinkedList();
    }

    push(element) {
        this.datastore.push(element);
    }

    peek() {
        return this.getItem[this.datastore.length - 1]?.data;
    }

    pop() {
       return this.datastore.pop()?.data;
    }

    get length() {
        return this.datastore.size();
    }

    clear() {
        this.datastore.clear();
    }
}


function baseConversion(num, base) {
    let number = num;
    let stack = new Stack();
    let result = "";

    while (number > 0) {
        stack.push(number % base);
        number = Math.floor(number / base);
    }

    while (stack.length > 0) {
        result += stack.pop().toString();
    }
    return result;
}

console.log(baseConversion(50, 10));