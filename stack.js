class Stack {
    constructor() {
        this.datastore = [];
    }

    push(element) {
        this.datastore.push(element);
    }

    peek() {
        return this.datastore[this.datastore.length - 1];
    }

    pop() {
       return this.datastore.pop();
    }

    get length() {
        return this.datastore.length;
    }

    clear() {
        this.top = 0;
        this.datastore = [];
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

console.log(baseConversion(125, 8));