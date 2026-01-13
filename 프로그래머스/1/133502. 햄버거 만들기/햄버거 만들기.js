function solution(ingredient) {
    var answer = 0;
    
    let stack = [];
    
    ingredient.forEach((item, idx, arr) => {
        if (item === 1 && isReady(arr, idx, stack[stack.length - 1])) {
            makeBurger(stack);
            answer++;
        }
        
        else if (item === 1 || isReady(arr, idx, stack[stack.length - 1])) {
            stack.push(item);
        } else {
            stack = [];
        }
    })
    
    return answer;
}

function isReady(arr, idx, latestItem) {
    if (arr[idx] === latestItem % 3 + 1) return true;
    return false;
}

function makeBurger(arr) {
    arr.pop();
    arr.pop();
    arr.pop();

}