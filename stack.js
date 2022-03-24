class Stack {
    constructor() {
        this.top = 0;
        this.datastore = [];
    }

    push(element) {
        this.top++;
        this.datastore.push(element);
    }

    peek() {
        return this.datastore[this.top - 1];
    }

    pop() {
        if (this.top > 0) {
            this.top--;
            return this.datastore.pop();
        } else {
            return undefined;
        }
    }

    get length() {
        return this.top;
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