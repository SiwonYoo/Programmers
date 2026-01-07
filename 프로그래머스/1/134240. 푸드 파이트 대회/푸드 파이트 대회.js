function solution(food) {
    let answer = '';
    
    const sortedFood = [];
    
    food.forEach((item, idx) => {
        if (idx) answer += String(idx).repeat(Math.floor(item/2))
    })
    
    answer = answer + '0' + [...answer].reverse().join('');
    
    return answer;
}