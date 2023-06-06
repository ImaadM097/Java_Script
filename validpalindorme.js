/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s2 = s.replace(/[^a-z0-9]/gi, '');
    let s3 = s2.toLowerCase();
    let l=0; let r = s3.length-1;

    while(l<r) {
        if(s3[l] !== s3[r]) return false;
        else {
            ++l; --r;
        }
    }
    return true;
};