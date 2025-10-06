function solution(players, m, k) {
    var answer = 0;
    
    const activeServers = new Array(24).fill(0);
    
    players.forEach((item, idx) => {
        const requiredServer = Math.floor(item / m);
        
        if (requiredServer > activeServers[idx]) {
            const addServer = requiredServer - activeServers[idx];
            answer += addServer;
            
            for (let i=idx; i<idx+k; i++) {
                if (i === 24) break;
                activeServers[i] += addServer;
            }
        } 
    })
    
    return answer;
}