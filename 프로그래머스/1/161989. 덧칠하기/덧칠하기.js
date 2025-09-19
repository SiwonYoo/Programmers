function solution(n, m, section) {
    let answer = 0;
    
    for (let i=section[0]; i<=n; i++) {
        if (section.includes(i)) {
            i += m - 1;
            answer++;
        }
    }
    
    return answer;
}