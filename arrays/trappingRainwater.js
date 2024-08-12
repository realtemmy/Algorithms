// Given an array of integers representing an elevation map where the width
// of each bar is 1, return how many rainwater can be trapped


// ====== Brute force ========
const trappedRainWater = (heights) => {
    let total = 0;
    for(let i = 0; i < heights.length; i++){
        let maxL = 0;
        let maxR = 0;
        for(let j = i + 1; j < heights.length; j++){
            maxR = Math.max(maxR, heights[j]);
        }
        for(let k = 0; k < i; k++){
            maxL = Math.max(maxL, heights[k]);
        }

        currentWater = Math.min(maxL, maxR) - heights[i];
        if(currentWater > 0){
            total = total + currentWater;
        }
    }

    return total;
};

console.log(trappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
