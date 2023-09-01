function loop1(n) {
    for (let row = 1; row <= n; row++) {
        let result = "";
        for (let col = 0; col < row; col++) {
            result += "*";
        }
        console.log(result);
    }
}

const test1 = loop1(5);

console.log(test1);