function binarySearch(items, target){
    let firstIndex = 0;
    let lastIndex = items.length - 1;

    while (firstIndex <= lastIndex){
        let middleIndex = ~~((firstIndex + lastIndex) / 2);
        if(items[middleIndex] === target){
            return middleIndex;
        } else if(items[middleIndex] < target){
            firstIndex = middleIndex + 1;
        } else {
            lastIndex = middleIndex - 1;
        }
    }
}


function binarySearch2(items, target) {
    if (items.length === 0) {
        return false;
    } else {
        let firstIndex = 0;
        let lastIndex = items.length - 1;
        let middleIndex = ~~(items.length / 2)

        if(items[middleIndex] === target){
            return true;
        } else if (items[middleIndex] < target) {
            let newItems = items.slice(middleIndex + 1);
            return binarySearch2(newItems, target);
        } else {
            let newItems = items.slice(firstIndex, middleIndex);
            return binarySearch2(newItems, target);
        }
    }
}

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
items.splice(2, 1);
console.log(items);
// let result = binarySearch2(items, 2);
// console.log(result);