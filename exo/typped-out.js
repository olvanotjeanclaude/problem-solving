function typedOut(string1, string2) {
    const array1 = pushType(string1);
    const array2 = pushType(string2);

    if (array1.length != array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;
}

function optimal(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let sSkipCount = 0;
    let tSkipCount = 0;

    while (i >= 0 || j >= 0) {
        if (S[i] === "#") {
            sSkipCount++;
            i--;
        } else if (sSkipCount > 0 && i >= 0) {
            sSkipCount--;
            i--;
        } else if (T[j] === "#") {
            tSkipCount++;
            j--;
        } else if (tSkipCount > 0 && j >= 0) {
            tSkipCount--;
            j--;
        } else if (S[i] !== T[j]) {
            return false;
        } else {
            i--;
            j--;
        }
    }

    return true;
}

function optimal2(string1, string2) {
    let p1 = string1.length - 1;
    let p2 = string2.length - 1;

    let count1 = 0;
    let count2 = 0;

    while (p1 >= 0 || p2 >= 0) {
        while (p1 >= 0) {
            if (string1[p1] == "#") {
                count1++;
                p1--;
            }
            else if (count1 > 0) {
                count1--;
                p1--;
            }
            else {
                break;
            }
        }

        while (p2 >= 0) {
            if (string2[p2] == "#") {
                count2++;
                p2--;
            }
            else if (count2 > 0) {
                count2--;
                p2--;
            }
            else {
                break;
            }
        }

        if (p1 >= 0 && p2 >= 0 && string1[p1] != string2[p2]) {
            return false;
        }


        if (p1 >= 0 && p2 < 0 || p1 < 0 && p2 >= 0) {
            return false;
        }

        p1--;
        p2--;
    }

    return true;
}


const test = optimal2("ab#c", "ad#c");

console.log(test);
// console.log("aÖSb".substring(0,1+1))