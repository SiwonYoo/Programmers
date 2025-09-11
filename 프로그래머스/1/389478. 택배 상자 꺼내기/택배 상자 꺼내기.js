function solution(n, w, num) {
    let answer = 1;
    
    let rest = num % w !== 0 ? num % w : w;
    
    let backRest = (rest) * 2 - 1;
    let frontRest = (w - (rest)) * 2 + 1;
    
    let current = num;
    
    while (true) {
        current += frontRest;
        if (current > n) break;
        else answer++;
        
        current += backRest;
        if (current > n) break;
        else answer++;
    }
    
    return answer;
}