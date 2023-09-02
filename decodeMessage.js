const decodeMessage = (key, message) => {
    const maps = new Map();
    const sets = new Set();
    let result = "";

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < key.length; i++) {
        if (key[i] != " " && !sets.has(key[i])) {
            sets.add(key[i]);
        }
    }

    let i = 0;

    sets.forEach((value) => {
        maps.set(value, alphabet[i]);
        i++;
    });

    for (let j = 0; j < message.length; j++) {

        if (maps.has(message[j])) {
            result += maps.get(message[j]);
        }
        else {
            result += " ";
        }
    }

    console.log(maps);

    return result;
}

const key = "eljuxhpwnyrdgtqkviszcfmabo";
const message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";

const result = decodeMessage(key, message);

console.log(result);