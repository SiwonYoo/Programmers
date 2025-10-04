function solution(t, p) {    
    let count = 0;
    
    while (t.length >= p.length) {
        if (+(t.substring(0, p.length)) <= +p) count++;
        t = t.substring(1);
    }

    return count;
}