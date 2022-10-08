/**
 * 
 * @param {number[]} array 
 * @param {number} target 
 * @returns {number[]}
 */

// [1,3,5,4,8,6,2] => [3,4]
function sums(array, target) {
    for (let p1 = 0; p1 < array.length; p1++) {
        const find = target - array[p1];
        for (let p2 = p1 + 1; p2 < array.length; p2++) {
            if (find == array[p2]) {
                return [p1, p2];
            }
        }
    }
    // Time: (O2), 

    return null;
}

function sumOptimal(array, target) {
    const maps = {};

    for (let index = 0; index < array.length; index++) {
        const currentVal = array[index];
        const mapsVal = maps[currentVal];

        if (array[mapsVal]) {
            return [maps[currentVal], index];
        }
        else {
            const complement = target - currentVal;
            maps[complement] = index;
        }
    }

    return null;
}

const input = [2, 7, 11, 15];

const test1 = sums(input, 9);
const test2 = sumOptimal(input, 9);

console.log(test2);