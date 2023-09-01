// one array ex: nums
// val
// remove all occurences of val in nums (order can be change)
// return the nubmer of element in nums, nums.length != val

const nums =[0,1,2,2,3,0,4,2];

const val = 2;

const removeElement = (nums = [], val) => {
    let actualLength = 0;

    for (const current of nums) {
        if (current !== val) {
            nums[actualLength] = current;
            actualLength++;
        }
    }

    console.log(nums);

    return actualLength;
}



const res = removeElement(nums, val);

console.log(res);