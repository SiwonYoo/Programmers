// 이전 시도들
// 1. join으로 합친 후, includes로 포함 여부 확인 -> replace로 제거 반복
    // 시간초과
// 2. stack에 하나씩 넣고 (ingredient[currentIndex] === stack[latestItem] % 3 + 1)로 비교
    // 성공
// 3. 보완: 기존 비교 방법은 이 문제에 과하게 의존적임
    // 스택의 마지막 값 기준으로 비교하도록 수정
    // pop 3번 반복 대신 stack.length -= 4; 으로 stack에서 값 제거

function solution(ingredient) {
    var answer = 0;
    
    let stack = [];
    
    ingredient.forEach((item, idx, arr) => {
        stack.push(item);
        
        if (stack.length >= 4) {
            const last = stack.slice(-4).join('');
            
            if (last === '1231') {
                answer++;
                stack.length -= 4;
            }
        }
    })
    
    return answer;
}