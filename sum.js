
function sums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (complement == nums[j]) {
                return [i, j];
            }
        }
    }

    return null;
}

const nums = [3, 2, 4];
const found = sums(nums, 6);
const found2 = optimalSum(nums, 6);
console.log({ found, found2 });

function optimalSum(nums, target) {
    const maps = {};

    for (const index in nums) {
        const current = nums[index];
        const numberToFind = target - current;
        console.log(numberToFind,target,current)


        if (current in Object.keys(maps) ){
            return [index, maps[current]]
        }
        else{
            maps[numberToFind] = index;
        }
        
    }

    console.log((maps));

    return null;
}