/**
 * 
 * @param {number} grades[] 
 */
function gradingStudents(grades) {
    const multiple = 5;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 0 || grades[i] > 100) {
            grades[i] = 0;
            continue;
        }

        const nextMultiple = nextMultipleNumber(grades[i], multiple);
        const difference = nextMultiple - grades[i];

        if (nextMultiple < 40) {
            continue;
        }

        if (difference < 3) {
            grades[i] = nextMultiple;
        }

    }

    return grades;
}

function gradingStudents1(grades) {
    const multiple = 5;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            continue;
        }

        let temp = grades[i] + multiple;

        while (temp > grades[i]) {
            const difference = temp - grades[i];
            if (temp >= 40 && temp % multiple == 0 && difference < 3) {
                grades[i] = temp;
            }
            temp--;
        }
    }

    return grades;
}

function nextMultipleNumber(number, multiple) {
    let result = 0;
    if (number % multiple == 0) {
        result = number + 5;
    }
    else {
        result = number + multiple - number % multiple;
    }

    return result;
}

const input = [73,67,38,33];
console.log(gradingStudents1(input));
// console.log(nextMultipleNumber(95,5))