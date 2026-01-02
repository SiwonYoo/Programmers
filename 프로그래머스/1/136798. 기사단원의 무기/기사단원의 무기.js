function solution(number, limit, power) {
    let answer = 0;
    
    for (let i=1; i<=number; i++) {
        // 약수의 개수 divisorCount 선언
        let divisorCount = 0;
        
        for (let j=1; j<=Math.sqrt(i); j++) {
            // 약수이면 divisorCount 증가
            if (!(i % j)) {
                if (j === Math.sqrt(i)) divisorCount++;
                else divisorCount += 2;
            }
        }

        // 약수의 개수(divisorCount)가 limit보다 크면 power만큼 증가
        if (divisorCount > limit) answer += power;
        // 약수의 개수(divisorCount)가 limit보다 작거나 같으면 divisorCount만큼 증가
        else answer += divisorCount;
    }
    
    return answer;
}