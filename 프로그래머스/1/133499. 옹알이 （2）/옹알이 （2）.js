function solution(babbling) {
    var answer = 0;
    
    const speakWords = ['aya', 'ye', 'woo', 'ma'];
    const speakWordsDouble = speakWords.map(item => item.repeat(2));

    for (let idx = 0; idx < babbling.length; idx++) {
        let babblingItem = babbling[idx];
                    console.log(idx, babblingItem)

        
        if (speakWordsDouble.some(speakWordDouble => babblingItem.includes(speakWordDouble))) continue;
        
        speakWords.forEach(speakWord => {
            babblingItem = babblingItem.replaceAll(speakWord, '.');
        })
        
        babblingItem = babblingItem.replaceAll('.', '');

        if (babblingItem.length === 0) {
            answer++;
            console.log(idx, babblingItem)
        }
    }
    
    return answer;
}
