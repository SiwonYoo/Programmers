function solution(n, w, num) {
    let answer = 1;
        
    let backRest = (num % w || w) * 2 - 1;
    let frontRest = (w - (num % w || w)) * 2 + 1;
        
    while (true) {
        num += frontRest;
        if (num > n) break;
        else answer++;
        
        num += backRest;
        if (num > n) break;
        else answer++;
    }
    
    return answer;
}