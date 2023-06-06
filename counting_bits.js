/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n+1);
    ans[0] = 0;
    for(let i=1; i<=n; i++) {
        if(i%2) {
            ans[i] = ans[i-1] + 1;
        }
        else {
            ans[i] = ans[i/2];
        }
    }
    return ans;
};