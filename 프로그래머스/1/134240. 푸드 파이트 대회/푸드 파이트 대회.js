function solution(food) {
    // 왼쪽 사람이 먹을 음식 준비
    const left = food
        // item/2씩 준비(나머지는 버림). String의 repeat 메서드 사용.
        .map((item, idx) => String(idx).repeat(Math.floor(item/2)))
        // join으로 모든 음식을 문자열로 묶음
        .join('');
    
    // 왼쪽 음식 + 물(0) + 왼쪽을 뒤집어 오른쪽 음식 준비
    return left + '0' + [...left].reverse().join('');
}