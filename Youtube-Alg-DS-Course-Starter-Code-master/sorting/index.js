// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {
  const array = arr.slice();
  for (let index = 0; index < (array.length - 1); index++){
    for (let j = 0; j < (array.length - index - 1); j++){
      if (array[j] > arr[j+1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  const array = arr.slice();
  for (let index = 0; index < (array.length - 1); index++){
    let swapIndex = index;
    for (let j = (index + 1); j < array.length; j++){
      if (array[j] < array[swapIndex]) {
        swapIndex = j;
      }
    }

    swap(array, index, swapIndex);
  }
  return array;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let index = 0; index < (arr.length - 1); index++){
    const element = arr[index];
    if (element < pivot) {
      leftArr.push(element);
    } else {
      rightArr.push(element);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
