/**
 * @param {character[][]} grid
 * @return {number}
 */
function dfs(x, y, grid, m, n) {
    if(x<0 || y<0 || x>=m || y >=n || grid[x][y] === '0') {
        return;
    }
    grid[x][y] = '0';
    dfs(x+1, y, grid, m, n);
    dfs(x, y+1, grid, m, n);
    dfs(x-1, y, grid, m, n);
    dfs(x, y-1, grid, m, n);
    
    return;
}

var numIslands = function(grid) {
    
    let m = grid.length;
    let n = grid[0].length;
    let islands = 0;

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === '1') {
                ++islands;
                dfs(i, j, grid, m, n); 
            }
        }
    }
    return islands;
};