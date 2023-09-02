// Given an integer array nums, 
// return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


function threeSum(nums) {
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const second = nums[j];
            for (let k = j + 1; k < nums.length; k++) {
                const thrird = nums[k];

                const temp = [first, second, thrird].sort().join(".");

                if (first + second + thrird == 0 && !results.includes(temp)) {
                    results.push(temp);
                }
            }
        }
    }

    return results.map(res => res.split("."));
}

const ex1 = threeSum([-1, 0, 1, 2, -1, -4]);

console.log(ex1);