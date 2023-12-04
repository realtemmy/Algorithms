// get the max no of 

// ===== Optimized =======
const getMaxWaterArea = (heights) => {
    // using shifting pointers
    //  0  1  2  3  4  5
    // [4, 8, 1, 2, 3, 9]
    let maxArea = 0;
    const length = heights.length
    let p1 = 0;
    let p2 = length - 1;
    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        if(heights[p1] < heights[p2]){
            p1 = p1 + 1;
        }else{
            p2 = p2 - 1
        }
    }

    return maxArea;
}

console.log(getMaxWaterArea([4, 8, 1, 2, 3, 9]));

console.log("Working");