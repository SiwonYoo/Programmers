// 두 명 비교
function whoGivenMore(me, friend, gifts) {
    let myCount = 0;
    let friendsCount = 0;
    
    for (let item of gifts) {
        if (item === me + " " + friend) myCount++;
        else if (item === friend + " " + me) friendsCount++;
    }
    
    if (myCount > friendsCount) return me;
    if (friendsCount > myCount) return friend;
    return '-1';
}

// 선물 지수
function giftScore(person, gifts) {
    let count = 0;
    
    const givenPerson = gifts.map(item => item.split(' ')[0]);
    const takenPerson = gifts.map(item => item.split(' ')[1]);
    
    givenPerson.forEach(item => {if (item === person) count++;});
    takenPerson.forEach(item => {if (item === person) count--;})
      
    return count;
}

function solution(friends, gifts) {
    var answer = 0;
    
    // 선물 지수 배열
    let giftScores = friends.map((item, idx) => giftScore(item, gifts));
    
    // 받은 선물 배열
    let giftCount = [];
    friends.forEach(() => {giftCount.push(0)});
    
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
