function del(s) {
    const s2 = s.slice(0, -1);
    return s2;
}
function isOP(c) {
    return c === '+' || c === '-' || c === '/' || c === '*';
}
function is_digit(c){
    return '0' <= c && c <= '9';
}


function evaluate1(s) {
    const st = [];
    const n = s.length;
    

    let num = 0;
    let curOp = '+';
    for(let i=0; i<n; ++i) {
        const curChar = s[i];

        if(is_digit(curChar)) {
            num = (num*10) + Number(curChar);
        }

        if(isOP(curChar) || i === n-1) {
            
            if(curOp === '-') {
                st.push(-1*num);
            }
            else if(curOp === '+') {
                st.push(num);
            }
            else if(curOp === '*') {
                let top = st.pop();
                st.push(top*num);
            }
            else if(curOp === '/') {
                let top = st.pop();
                st.push(Math.trunc(top/num));
            }
            num = 0;
            curOp = curChar;
        }
        

    }
    return (st.reduce((acc, el)=>acc+el)).toString();
}