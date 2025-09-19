function solution(keymap, targets) {
    let Arr_totalCountForEachTarget = [];
    
    Arr_totalCountForEachTarget = targets.map((string) => {
        let Arr_minCountForEachLetter = Array.from(string).map((letter) => {
            let Arr_countForEachKeymap = [];
            keymap.forEach(keys => {
                let keyIdx = Array.from(keys).indexOf(letter);
                if (keyIdx !== -1) Arr_countForEachKeymap.push(keyIdx + 1);
            });  

            if (Arr_countForEachKeymap.length === 0) return -1;
            return Math.min(...Arr_countForEachKeymap);
        })
                
        if (Arr_minCountForEachLetter.includes(-1)) return -1;
        else return Arr_minCountForEachLetter.reduce((prev, curr) => prev + curr, 0);
    })
    
    return Arr_totalCountForEachTarget;
}