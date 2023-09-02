const maxArea = function (height) {
    let surface = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const left = height[i];
            const right = height[j];

            const currentSurface = Math.min(left, right) * (j - i);

            surface = Math.max(surface, currentSurface);
        }
    }

    return surface;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(height));