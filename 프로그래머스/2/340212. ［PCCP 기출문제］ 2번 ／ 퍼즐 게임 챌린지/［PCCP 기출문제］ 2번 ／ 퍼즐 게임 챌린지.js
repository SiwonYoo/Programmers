function solution(diffs, times, limit) {
    const maxLevel = 100000;
    
    return test(diffs, times, limit, 1, maxLevel);
}

function test(diffs, times, limit, minLevel, maxLevel) {
    if (maxLevel === minLevel) return minLevel;

    const level = Math.floor((minLevel + maxLevel) / 2);
    
    let totalTime = times[0];
    for (let idx = 1; idx < times.length; idx++) {
        if (diffs[idx] <= level) {
            totalTime += times[idx];
        } else {
            totalTime += (diffs[idx] - level) * times[idx - 1] + (diffs[idx] - level + 1) * (times[idx]);
        }
        if (totalTime > limit) break;
    }
        
    if (totalTime === limit) return level;
    else if (totalTime > limit) return test(diffs, times, limit, level+1, maxLevel);
    else return test(diffs, times, limit, minLevel, level);
}