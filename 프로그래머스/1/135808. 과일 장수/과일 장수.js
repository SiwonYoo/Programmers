// 이전 풀이 개선
// - while 문과 splice를 사용했지만 시간 초과로 다음과 같이 개선했습니다.
// - for 문과 slice 사용 (원본 배열 수정X)
// - 최솟값을 구하지 않고 배열의 첫 번째 값을 사용하도록 개선

function solution(k, m, score) {
    let totalCost = 0;
    
    // score 내림차순 정렬
    score.sort((a, b) => b - a);

    // i는 m씩 증가 // m+i가 score의 길이보다 크거나 같으면 반복
    for (let i = 0; score.length >= m+i; i += m) {
        // i부터 m개 잘라낸 배열의 최솟값 * 개수(m)를 totalCost에 더함
        totalCost += score[i + m - 1] * m;
    }
    
    return totalCost;
}