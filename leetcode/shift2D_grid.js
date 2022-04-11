function shift2DGrid(grid, k) {
    let newGrid = grid.flat();
    const m = grid.length // column length
    const n = grid[0].length; // row length
    const totalLength = newGrid.length;

    const shiftArr = new Array(totalLength);
    for (let index = 0; index < totalLength; index++){
        const pos = (index + k) % totalLength;
        shiftArr[pos] = newGrid[index];
    }

    newGrid = [];
    for (let index = 0; index < m; index++){
        const start = index * n;
        newGrid.push(shiftArr.slice(start, start + n))
    }
    return newGrid;
};


console.log(shift2DGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4));