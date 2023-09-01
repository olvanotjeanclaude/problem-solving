const input = [4, 8, 28, 2, 3, 15, 9];

function minBruteForce(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        // console.log(min,array[i])
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}


const min = minBruteForce(input);
console.log(min);