
function twoSum(nums, target) {
    let map = {};
    for (let index = 0; index < nums.length; index++){
        const value = nums[index];
        const fIndex = map[target - value];
        if (fIndex !== undefined) {
            return [fIndex, index];
        }
        map[value] = index;
    }
};


console.log(twoSum([2,7,11,15], 9));