
class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
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
    
    size(){
        return this.length;
    }

	getLast() {
	   let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
	}

	clear() {
		this.head = null;
		this.length = 0;
	}

	shift() {
		const current = this.head;
        if (current) {
            this.head = current.next;
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
			let lastNode = this.getLast();
			while (current.next !== lastNode) {
            	current = current.next;
			}

			current.next = null;
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
			let node = new Node(data);
			lastNode.next = node;
			this.length++
		}
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		} else {
			let counter = 0;
			let current = this.head;
			while (counter < index) {
				current = current.next;
				counter++
			}
			return current;
		}
	}

	set(index, data) {
		if (index < 0 || index >= this.length) {
			return false;
        } else {
			let current = this.get(index);
			current.data = data;
            return true;
		}
	}

	remove(index) {
		 if (index < 0 || index >= this.length) {
			return;
		 } else if (index === 0) {
			 return this.shift();
		 } else {
			 let prevNode = this.get(index - 1);
			 let current = this.get(index);
			 prevNode.next = prevNode.next.next;
			 this.length--;
			 return current;
		 }
	}

	insert(index, data) {
        if (index < 0 || index >= this.length) {
			return false;
        } else if (index === 0) {
			this.unshift(data);
			return true;
        } else {
             let prevNode = this.get(index - 1);
			 let nextNode = this.get(index);
			 prevNode.next = new Node(data, nextNode);
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


let list = new LinkedList();
list.unshift(24);
list.unshift(16);
list.unshift(18);
list.insert(0, 47);
console.log(list.size());
console.log(list.search(47));