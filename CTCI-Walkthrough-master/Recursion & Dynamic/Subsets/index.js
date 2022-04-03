/* 
Given an array of numbers, find all its subsets. 

Example
Input: [1, 2, 3]
Output: [[], [1], [1, 2], [1, 3], [1, 2, 3], [2], [2, 3], [3]]
*/

function subsets(nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; i++) {
    let length = res.length;
    for (let j = 0; j < length; j++) {
      res.push(res[j].concat([nums[i]]));
    }
  }
  return res;
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

describe("Subsets", () => {
  it("works", () => {
    const res = subsets([1, 2, 3]);
    res.sort((a, b) => a[0] - b[0]);
    assert.equal(res.join(""), "11,21,31,2,322,33");
    //[[], [1], [1, 2], [1, 3], [1, 2, 3], [2], [2, 3], [3]]
  });
});

mocha.run();