function solution(s, skip, index) {
    let answer = '';
    
    for (let sChar of s) {
        let code = sChar.charCodeAt();
        for (let i = 0; i < index;) {
            if (code === 'z'.charCodeAt()) code = 'a'.charCodeAt();
            else code++;
            if (!skip.includes(String.fromCharCode(code))) i++;
        }

                                      
        answer += String.fromCharCode(code);
    }
    return answer;
}