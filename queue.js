class Queue {
    constructor() {
        this.datastore = [];
    }

    enqueue(element) {
        this.datastore.push(element);
    }

    dequeue() {
        return this.datastore.shift();
    }

    peek() {
        return this.datastore[0];
    }

    get length() {
        return this.datastore.length;
    }

    isEmpty() {
        return this.datastore.length === 0;
    }
}

let q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.peek());
q.dequeue();
console.log("Front of queue: " + q.peek());