function longestSubString(string) {
    string = string.toLowerCase();
    let index = 0;

    const results = [
        string[index]
    ];

    if (string == "") {
        return 0;
    }

    
    for (let i = 1; i < string.length; i++) {
        let temp = results[index];

        if (temp&& !temp.includes(string[i])) {
            temp += string[i];

            results[index] = temp;
        }
        else {
            const lastChar = temp[temp.length - 1];

            if (lastChar != string[i]) {
                temp = lastChar + string[i];
            }
            else {
                temp = string[i];
            }

            index++;
        }
    }

    return results;
}

function test2(string) {
    let p1 = 0;
    let p2 = 1;
    let temp = "";
    const results = [];

    while (p1 < string.length) {
        while (p2 < string.length) {
            if (!temp.includes(string[p1])) {
                temp += string[p1];
            }
            else if (!temp.includes(string[p2])) {
                temp += string[p2];
            }
            else {
                results.push(temp);
            }
            p2++;
        }
        p1++;
    }
}

console.log(longestSubString("abcbda"));