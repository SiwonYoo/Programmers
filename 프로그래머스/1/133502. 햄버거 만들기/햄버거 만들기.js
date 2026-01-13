function solution(ingredient) {
    var answer = 0;
    
    const stack = [];
    
//     ingredient.forEach((item, idx, arr) => {
//         if (isReady(arr, idx)) {
//             if (item === 3) {
//                 stack.pop();
//                 stack.pop();
//                 stack.pop();
//             } else {
//                 stack.push(idx);
                
//             }
//         }
//     })
    
    let idx = 0;
    
    while (ingredient) {
        const item = ingredient[idx];
        
        if (isReady(ingredient, idx)) {
            if (item === 3) {
                stack.pop();
                stack.pop();
                stack.pop();
                ingredient.splice(idx-3, 4)
                idx = stack.pop();
                answer++;
                continue;
            } else {
                stack.push(idx);
            }
        }
        
        idx++;
    }
    
    return answer;
}

function isReady(arr, idx) {
    if (arr[idx + 1] === 1) return true;
    if (arr[idx + 1] === arr[idx] % 3 + 1) return true;
    return false;
}