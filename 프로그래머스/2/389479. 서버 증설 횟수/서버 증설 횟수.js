function solution(players, m, k) {
    var answer = 0;
    
    const server = new Array(24).fill(0);
    
    players.forEach((item, idx) => {
        const needServer = Math.floor(item / m);
        if (needServer > server[idx]) {
            const moreServer = needServer - server[idx];
            answer += moreServer;
            for (let i=idx; i<idx+k; i++) {
                if (i === 24) break;
                server[i] += moreServer;
            }
        } 
    })
    
    return answer;
}