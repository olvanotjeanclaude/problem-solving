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

function pushType(string) {
    const array = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] != "#") {
            array.push(string[i])
        }
        else {
            array.pop();
        }
    }

    return array;
}
console.log(typedOut("ab#z", "az#z"))