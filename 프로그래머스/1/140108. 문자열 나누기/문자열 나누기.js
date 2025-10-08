function solution(s) {    
    let xIdx = 0;
    let score = 0;
    
    const splitArr = [];
  
    [...s].forEach((item, idx) => {
        if (s[xIdx] === item) score++;
        else score--;
        
        if (!score) {
            splitArr.push(s.slice(xIdx, idx+1));
            xIdx = idx+1;
        } else if (idx === s.length-1) {
            splitArr.push(s.slice(xIdx));
        }
    })    
    
    return splitArr.length;
}