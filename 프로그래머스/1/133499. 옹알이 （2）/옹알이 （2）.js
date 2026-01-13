// 개선점
// - 연속 발음 체크 방식을 speakWordsDouble 사용 대신 파서 방식으로 더 명확하게 연속 발음 검증 가능
// - replaceAll을 사용하여 문자열 전체 치환 후 남은 글자 체크에서 왼쪽부터 순서대로 토큰 소비 방식으로 수정 (구조적으로 안전)
// - 전체적으로 해당 문제에 대한 의존을 줄이고 확장 가능하도록 개선함


function solution(babbling) {
    let answer = 0;
    
    // 허용 발음 토큰
    const speakWords = ['aya', 'ye', 'woo', 'ma'];

    // babbling 배열 순회
    for (let b of babbling) {
        // 이전 토큰 저장 (연속 발음 금지)
        let prevWord = '';
        
        // 문자열 끝까지 검사
        while (b.length > 0) {
            // 이번 while에서 매치가 없으면 종료
            let stopFlag = true;
            
            // 토큰 후보 순회
            for (let currentWord of speakWords) {                   // 문자열 맨 앞과 토큰 비교
                if (b.startsWith(currentWord)) {
                    // 연속 발음이면 다음 후보 검사
                    if (currentWord === prevWord) continue;
                    // 매치 성공, while 계속하도록 stopFlag를 false로 update
                    stopFlag = false;
                    // 토큰 소비 (앞부분 제거)
                    b = b.slice(currentWord.length);
                    // 이전 토큰 업데이트
                    prevWord = currentWord;
                    // 토큰 하나 찾았으니 for 루프 종료
                    break; 
                }
            }
            
            // 이번 while에서 매치 못 하면 종료
            if (stopFlag) break;
        }
        
        // 문자열 전체가 토큰으로만 구성되면 카운트 (모두 제거되어 길이가 0인 상태)
        if (b.length === 0) answer++;
    }
    
    return answer;
}
