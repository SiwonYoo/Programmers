function solution(schedules, timelogs, startday) {
    var answer = 0;
    const saturday = (13 - startday) % 7;
    const sunday = (7 - startday) % 7;
    
    function forOneEmployee(schedule, timelogs) {
        let scheduleMM = Math.floor(schedule / 100) * 60 + schedule % 100;
        
        for (let i=0; i<timelogs.length; i++) {
            let timelogMM = Math.floor(timelogs[i] / 100) * 60 + timelogs[i] % 100;
            if (i !== saturday && i !== sunday)
            if (timelogMM - scheduleMM > 10) {
                return false;
            }
        }
        
        return true;
    }
    
    schedules.forEach((item, idx) => {
        if (forOneEmployee(item, timelogs[idx])) answer++;
    });
    
    return answer;
}