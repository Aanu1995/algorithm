class CustomSet {
    constructor() {
        this.data = [];
    }
    add(element) {
        if (!this.data.includes(element)) {
            this.data.push(element);
            return true;
        }
        return false;
    }
    remove(data) {
        let pos = this.data.indexOf(data);
        if (pos >= 0) {
            this.data.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }
    includes(element) {
        return this.data.includes(element);
    }

    union(set) {
        let tempSet = new CustomSet();
        for (let index = 0; index < this.size; index++){
            let element = this.data[index];
            tempSet.add(element);
        }
        for (let index = 0; index < set.size; index++){
            let element = set.data[index];
            tempSet.add(element);
        }

        return tempSet;
    }
    intersection(set) {

        let tempSet = new CustomSet();
        for (let index = 0; index < this.size; index++){
            let element = this.data[index];

            if (set.includes(element)) {
                tempSet.add(element);
            }
        }
        return tempSet;
    }
    difference(set) {
        let tempSet = new CustomSet();

        for (let index = 0; index < this.size; index++){
            let element = this.data[index];
            if (!set.includes(element)) {
                tempSet.add(element);
            }
        }

        return tempSet;
    }

    get size() {
        return this.data.length;
    }
}


let cis = new CustomSet();
let it = new CustomSet();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");

let diff = cis.difference(it);
console.log(diff.data);
