/**
 *
 * @param {number[]} heightArray 
 * @returns {number}
 * min(a,b) x (bi-ai)
 */

function calculateMaxArea(heightArray) {
    let maxArea = 0;

    for (let i = 0; i < heightArray.length; i++) {
        for (let j = i + 1; j < heightArray.length; j++) {
            let height = heightArray[i];
            let width = j - i;

            if (heightArray[i] > heightArray[j]) {
                height = heightArray[j];
            }

            const area = height * width;

            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
}

function calculateMaxAreaOptimal(heightArray) {
    let maxArea = heightArray[0];
    let pL = 0;
    let pR = heightArray.length - 1;

    while (pL < pR) {
        const area = Math.min(heightArray[pL], heightArray[pR]) * (pR - pL);
        maxArea = Math.max(area, maxArea)
        if (heightArray[pL] < heightArray[pR]) {
            pL++;
        }
        else {
            pR--;
        }
    }

    return maxArea;
}

const input = [4, 8, 28, 2, 3, 15, 9];

const maxArea = calculateMaxAreaOptimal(input);
console.log(maxArea);
