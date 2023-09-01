const intToRoman = number => {
    const maps = {
        1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X",
        40: "XL", 50: "L", 90: "XC", 100: "C",
        400: "CD", 500: "D", 900: "CM", 1000: "M"
    };

    const mapsKeys = Object.keys(maps);
    const mapValues = Object.values(maps);

    let result = "";

    let index = mapsKeys.length - 1;

    while (number > 0) {
        while (number >= mapsKeys[index]) {
            number -= mapsKeys[index];
            result += mapValues[index];
        }
        index--;
    }

    return result;
}

const test1 = intToRoman(1994);

console.log(test1);

