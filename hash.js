/// HashTable using Separate Chaining to avoid Collision
class HashTable{
    constructor() {
        this.table = new Array(137);
    }
    setItem(key, value) {
        const pos = this.betterHash(key);
        if (this.table[pos]) {
            this.table[pos].push([key, value]);
        } else {
            this.table[pos] = [[key, value]];
        }
    }

    getItem(key) {
        const pos = this.betterHash(key);
        if (this.table[pos]) {
            return this.table[pos].find(data => data[0] === key)[1];
        }
        return null;
    }

    betterHash(key) {
        const hash = 37;
        let total = 0;
        for (let index = 0; index < key.length; index++){
            total += (hash * total) +  key.charCodeAt(index);
        }

        return total % this.table.length;
    }
}


let hashTable = new HashTable();
hashTable.setItem("name", "Aanu Olakunle");
hashTable.setItem("age", 27);
hashTable.setItem("location", "Nigeria");
hashTable.setItem("occupation", "Nigeria");

console.log(hashTable.getItem("name"));