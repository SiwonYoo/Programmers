function solution(s) {
    var answer = 0;
    
    let xIdx = 0;
    let splitArr = [];
    
    let same = 0;
    let diff = 0;
    
    [...s].forEach((item, idx) => {
        if (s[xIdx] === item) same++;
        else diff++;
        
        if (same === diff) {
            splitArr.push(s.slice(xIdx, idx+1));
            xIdx = idx+1;
        } else if (idx === s.length-1) {
            splitArr.push(s.slice(xIdx));
        }
    })
    
    console.log(splitArr);
    
    return splitArr.length;
}