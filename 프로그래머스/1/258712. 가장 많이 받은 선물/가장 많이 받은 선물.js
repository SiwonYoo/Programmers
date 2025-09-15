// 두 명 비교
function whoGivenMore(A, B, gifts) {
    let ACount = 0;
    let BCount = 0;
    
    for (let item of gifts) {
        if (item === A + " " + B) ACount++;
        else if (item === B + " " + A) BCount++;
    }
    
    if (ACount > BCount) return A;
    if (BCount > ACount) return B;
    return '-1';
}

// 선물 지수
function giftScore(person, gifts) {
    let count = 0;
    
    const giver = gifts.map(item => item.split(' ')[0]);
    const taker = gifts.map(item => item.split(' ')[1]);
    
    giver.forEach(item => {if (item === person) count++;});
    taker.forEach(item => {if (item === person) count--;})
      
    return count;
}

function solution(friends, gifts) {
    var answer = 0;
    
    // 선물 지수 배열
    const giftScores = friends.map((item, idx) => giftScore(item, gifts));
    
    // 받은 선물 배열
    const giftCount = new Array(friends.length).fill(0);
    
    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++) {            
            const A = friends[i];
            const B = friends[j];
            
            // 더 많이 준 사람이 winner
            const winner = whoGivenMore(A, B, gifts);
            
            // A와 B 비교
            if (winner === A) giftCount[i]++;
            else if (winner === B) giftCount[j]++;
            // 동점일 때 선물 지수 비교
            else if (giftScores[i] > giftScores[j]) giftCount[i]++;
            else if (giftScores[i] < giftScores[j]) giftCount[j]++;
        }
    }
        
    // 가장 많은 선물의 수
    answer = giftCount[0];
    for (let i=1; i<friends.length; i++) {
        if (answer < giftCount[i]) answer = giftCount[i];
    }
    
    return answer;
}
