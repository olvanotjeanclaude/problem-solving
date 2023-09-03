const palyndromNumber = (nums) => {
    if (nums < 0) {
        nums - nums;
    }

    if(nums == 0) return true;

    let source = nums;
    let result = "";

    while (nums > 0) {
        const rest = nums % 10;

        result += rest;

        nums = Math.floor(nums / 10);
    }

    
    result = parseInt(result)
 
    return result === source;
}

const isOk = palyndromNumber(0);

console.log(isOk);
