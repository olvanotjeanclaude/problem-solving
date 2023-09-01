const tree = {
    name: "John",
    children: [
        {
            name: "Jim",
            children: []
        },
        {
            name: "Zoe",
            children: [
                { name: "Kyle", children: [] },
                { name: "Sophia", children: [] }
            ]
        }
    ]
};


function arrayOfName(tree, names = []) {
    names.push(tree.name);
    
    if (tree.children.length==0) {
        return;
    }

    for (const child of tree.children) {
        printRecursive(child, names);
    }

    return names;
}

