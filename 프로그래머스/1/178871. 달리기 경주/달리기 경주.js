function solution(players, callings) {
    const playersMap = new Map(players.map((item, idx)=>[item, idx]));
    callings.forEach(item => switchPlayers(item, players, playersMap));
    
    return players;
}



function switchPlayers(callingPlayer, players, playersMap) {
    const callingIdx = playersMap.get(callingPlayer);
    const frontPlayer = players[callingIdx - 1];
    
    players[callingIdx] = frontPlayer;
    players[callingIdx-1] = callingPlayer;
    
    playersMap.set(callingPlayer, callingIdx - 1).set(frontPlayer, callingIdx);
    
    return players;
}