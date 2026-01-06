function solution(k, m, score) {
    let totalCost = 0;
    
    // score 내림차순 정렬
    score.sort((a, b) => b - a);
    
    // score의 길이가 m보다 작아질 때까지 계속 반복
    // while (score.length >= m) {
    //     // 0부터 m개 잘라낸 배열
    //     const sliceScore = score.splice(0, m);
    //     // 잘라낸 배열 중 가장 작은 점수
    //     const minScore = Math.min(...sliceScore);
    //     // 가장 작은 점수 * 사과 개수(m)을 totalCost에 추가
    //     totalCost += minScore * m;
    // }
    
    for (let i=0; score.length - i >= m; i=i+m) {
        totalCost += Math.min(...score.slice(i, i+m)) * m;
    }
    
    return totalCost;
}