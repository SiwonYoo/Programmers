function solution(today, terms, privacies) {    
    const [todayYYYY, todayMM, todayDD] = today.split('.').map(i=>Number(i));
    const termsMap = new Map(terms.map(term => [term.split(' ')[0], Number(term.split(' ')[1])]));
    
    const toDeletePricacies = privacies.map((privacy, idx) => {
        const startDate = privacy.split(' ')[0];
        const term = privacy.split(' ')[1];
        
        const [startYYYY, startMM, startDD] = startDate.split('.').map(i=>Number(i));
        
        let endMM = startMM + termsMap.get(term);
        let endYYYY = startYYYY;
        if (endMM > 12) {
            endYYYY = startYYYY + Math.floor((endMM-1) / 12);
            endMM = endMM % 12 || 12;
        }
        let endDD = startDD - 1;
        if (!endDD) {
            endDD = 28;
            endMM--;
            if (!endMM) {
                endMM = 12;
                endYYYY--;
            }
        }
        
        if (todayYYYY < endYYYY) return -1;
        if (todayYYYY === endYYYY && todayMM < endMM) return -1;
        if (todayYYYY === endYYYY && todayMM === endMM && todayDD <= endDD) return -1;
        
        return idx+1;
    });
    
    return toDeletePricacies.filter(item => item !== -1);
}