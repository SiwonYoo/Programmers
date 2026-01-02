// 이전 풀이에서 개선된 점
// - 명예의 전당은 최대 k개만 유지
// - 현재 최솟값보다 의미 있는 점수만 반영
// - 불필요한 전체 정렬/삭제 최소화

function solution(k, score) {
    // 매일 발표되는 명예의 전당 최솟값을 저장할 배열
    let answer = [];
    
    // 명예의 전당(hall of fame) - 오름차순 유지
    const hof = [];
    
    for (let s of score) {
        // 1. 명예의 전당이 k명을 넘지 않으면, 새로운 점수 추가한 뒤 오름차순 정렬
        if (hof.length < k) {
            hof.push(s);
            hof.sort((a, b) => a - b);
        }
        // 2. 명예의 전당이 이미 k명이면, 현재 최솟값을 새로운 점수로 교체한 뒤 오름차순 정렬
        else if (hof[0] < s) {
            hof[0] = s;
            hof.sort((a, b) => a - b);
        }
        // 3. 새로운 점수가 현재 최솟값보다 작거나 같으면, 어떠한 처리도 하지 않고 유지

        // answer에 현재 명예의 전당의 최솟값 추가
        answer.push(hof[0])
    }
    
    return answer;
}