function solution(k, score) {
    // 명예의 전당(k위까지) 중 가장 작은 값 배열
    var answer = [];
    
    // 명예의 전당(hall of fame): 모든 점수를 내림차순으로 넣을 배열 선언
    const hof = [];
    
    for (let i of score) {
        // 매일 가수 점수 추가
        hof.push(i);
        // 내림차순 정렬
        hof.sort((a, b) => b - a);
        
        // hof의 크기가 k보다 작으면 hof의 가장 마지막 값을 answer 배열에 넣음
        if (hof.length < k) answer.push(hof[hof.length - 1])
        // hof의 크기가 k보다 같거나 크면 hof의 k번째 값을 answer 배열에 넣음
        else answer.push(hof[k - 1]);
    }
    
    return answer;
}