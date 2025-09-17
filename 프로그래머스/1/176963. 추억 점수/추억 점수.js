function solution(name, yearning, photo) {
    var answer = [];
    
    let yearningMap = new Map(name.map( (item, idx) => [item, yearning[idx]] ));

    answer = photo.map(item => {
        let score = 0;
        item.forEach((name)=>{ score += yearningMap.get(name) || 0; });
        return score;
    });
    
    return answer;
}