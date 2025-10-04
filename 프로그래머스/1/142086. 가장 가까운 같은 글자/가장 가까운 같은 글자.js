function solution(s) {    
    const sMap = new Map();
    const answer = [...s].map((item, idx) => {
        const existData = sMap.get(item);
        sMap.set(item, idx);
        
        if (existData != undefined) return idx - existData;
        else return -1;
    });
    
    return answer;
}