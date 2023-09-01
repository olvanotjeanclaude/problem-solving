const graphs1 = {
    A: ["C", "B"],
    B: ["E", "D"],
    C: ["G", "F"]
}

const graphs = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F", "G"],
    D: [],
    E: [],
    F: [],
    G: [],
}


const iterate = (graphs, node) => {
    const stacks = [node];
    let result = "";

    if (!graphs[node]) {
        return null;
    }

    while (stacks.length > 0) {
        const current = stacks.pop();
        result += current;
        for (const node of graphs[current]) {
            stacks.push(node);
        }
    }

    return result;
}

const recursion = (graphs, node, result = []) => {
    result += node;
   
    for (let neighboor of graphs[node]) {
       result.push()
    }

    return result;
}

const test = recursion(graphs, "A", "");
console.log(test);

