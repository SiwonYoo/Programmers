// 이전 시도들
// 1. join으로 합친 후, includes로 포함 여부 확인 -> replace로 제거 반복
    // 시간초과
// 2. stack에 하나씩 넣고 (ingredient[currentIndex] === stack[latestItem] % 3 + 1)로 비교
    // 성공 (메모리: 65.8 MB, 시간: 138.67 ms)
// 3. 보완: 기존 비교 방법은 이 문제에 과하게 의존적임
    // 스택의 마지막 값 기준으로 비교하도록 수정
    // pop 3번 반복 대신 stack.length -= 4; 으로 stack에서 값 제거
    // 성능은 2번보다 안좋아졌지만, 문제에 대한 의존을 줄이고 로직을 단순화시킴
    // 메모리: 96.7 MB, 시간: 222.81 ms

function solution(ingredient) {
    var answer = 0;
    
    // 햄버거를 하나씩 쌓을 스택 준비
    let stack = [];
    
    // 재료를 하나씩 돌면서
    ingredient.forEach((item, idx, arr) => {
        // 재료를 하나씩 스택에 쌓음
        stack.push(item);
        
        // 스택의 길이가 4 이상이 되면
        if (stack.length >= 4) {
            // 마지막 4개를 잘라 last에 할당
            const last = stack.slice(-4).join('');
            
            // last가 1231이면
            if (last === '1231') {
                // 정답 +1
                answer++;
                // stack의 length를 조절하여 마지막 4개 값을 제거함
                stack.length -= 4;
            }
        }
    })
    
    return answer;
}