const getTrappedRainwater = function (heights) {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }


  return totalWater;
}

const getTrappedRainwater2 = function (heights) {
  const maxLeft = [];
  const maxRight = [];
  const size = heights.length;
  let sumArea = 0;

  maxLeft[0] = heights[0];
  maxRight[size - 1] = heights[size - 1];

  for (let i = 1; i < heights.length; i++) {
    maxLeft[i] = Math.max(heights[i], maxLeft[i - 1]);
  }

  for (let j = size - 2; j >= 0; j--) {
    maxRight[j] = Math.max(heights[j], maxRight[j + 1]);
  }

  for (let k = 0; k < heights.length; k++) {
    sumArea += Math.min(maxLeft[k], maxRight[k]) - heights[k];
  }

  return sumArea;
}

const getTrappedRainwate3 = function (heights) {
  let pL = 0;
  let pR = heights.length - 1;
  let maxLeft = maxRight = 0;
  let sumArea = 0;

  while (pL < pR) {
    if (heights[pL] < heights[pR]) {
      if (heights[pL] >= maxLeft) {
        maxLeft = heights[pL];
      }
      else {
        sumArea += maxLeft - heights[pL];
      }
      pL++;
    }
    else {
      if (heights[pR] >= maxRight) {
        maxRight = heights[pR];
      }
      else {
        sumArea += maxRight - heights[pR];
      }
      pR--;
    }
  }

  return sumArea;
}

const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

console.log(optimal2(elevationArray));