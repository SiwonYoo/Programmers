function solution(bandage, health, attacks) {
    let attackCount = 0;
    let currentHealth = health;
    let staleTime = 1;

    for (let time=1; attackCount < attacks.length; time++) {
        if (time === attacks[attackCount][0]) {
            currentHealth -= attacks[attackCount][1];
            if (currentHealth <= 0) return -1;
            attackCount++;
            staleTime = 1;
            continue;
        }        
        currentHealth += bandage[1];
        if (staleTime === bandage[0]) {
            currentHealth += bandage[2];
            staleTime = 1;
        } else {
            staleTime++;
        }
        
        if (currentHealth >= health) currentHealth = health;
    }
    
    return currentHealth;
}