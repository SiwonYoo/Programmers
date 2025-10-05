function solution(info, n, m) {    
    info.sort((a, b) => b[0] - a[0]);
    
    const arr = [[],[],[]];
    info.forEach(item => arr[item[1]-1].push(item[0]))
    
    const answer = [];
    
    let sum = 0;
    
    let iSum = 0;
    for (let i=0; i<=arr[2].length; i++) {
        if (i * 3 >= m) break;
        iSum += arr[2][i-1] || 0;
        
        let jSum = 0;
        for (let j=0; j<=arr[1].length; j++) {
            if (i * 3 + j * 2 >= m) break;
            jSum+= arr[1][j-1] || 0;
            
            let kSum = 0;
            for (let k=0; k<=arr[0].length; k++) {
                if (i * 3 + j * 2 + k >= m) break;  
                kSum+= arr[0][k-1] || 0;
            }
            answer.push(iSum + jSum + kSum);
        }
    }

    console.log(answer);
    
    let Asum = 0;
    info.forEach(item => Asum += item[0]);
    console.log(Asum);
    
    if (Asum - Math.max(...answer) < n) return (Asum - Math.max(...answer));
    
    return -1;
}