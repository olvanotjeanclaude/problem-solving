function removeDuplicate(nums) {
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (!results.includes(nums[i])) {
      results.push(nums[i]);
    }
  }

  return results;
}

const input = [1, 1, 2];
const test1 = removeDuplicate(input);

console.log(test1);