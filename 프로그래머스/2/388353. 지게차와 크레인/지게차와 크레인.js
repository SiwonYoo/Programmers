function solution(storage, requests) {
    var answer = 0;
    
    storage = storage.map(item => item.split(''));
        
    requests.forEach((item) => {
        if (item.length === 1) forklift(storage, item);
        else crane(storage, item[0]);
    })
    
        
    storage.forEach((item) => {
        item = item.filter(item => item !== 0);
        answer += item.length;
    });
    
    return answer;
}

function forklift(storage, char) {
    const visited = new Array(storage.length).fill(0).map(item => new Array(storage[0].length).fill(0));
    
    
    const tempStorage = storage.map(item => [...item]);
    
    for (let i=0; i<tempStorage.length; i++) {
        for (let j=0; j<tempStorage[0].length; j++) {
            if (tempStorage[i][j] === char) {   
                visited.map(item => item.fill(0));
                if (isPossible(i, j)) {
                    storage[i][j] = 0;
                }
            }
        }
    }
    
    
    function isPossible(a, b) {
        if (visited[a][b]) return 0;
        visited[a][b] = 1;
        
        if (tempStorage[a+1] === undefined || tempStorage[a-1] === undefined || tempStorage[a][b+1] === undefined || tempStorage[a][b-1] === undefined) {
            return 1;
        }
                
        if (tempStorage[a+1] !== undefined && tempStorage[a+1][b] === 0) {
            if (isPossible(a+1, b)) return 1;

        }
        if (tempStorage[a-1] !== undefined && tempStorage[a-1][b] === 0) {
            if (isPossible(a-1, b)) return 1;

        }
        if (tempStorage[a][b+1] === 0) {
            if (isPossible(a, b+1)) return 1;

        }
        if (tempStorage[a][b-1] === 0) {
            if (isPossible(a, b-1)) return 1;

        }
        
        return 0;
    }
}

function crane(storage, char) {
    for (let i=0; i<storage.length; i++) {
        for (let j=0; j<storage[0].length; j++) {
            if (storage[i][j] === char) {
                storage[i][j] = 0;
            }
        }
    }
}