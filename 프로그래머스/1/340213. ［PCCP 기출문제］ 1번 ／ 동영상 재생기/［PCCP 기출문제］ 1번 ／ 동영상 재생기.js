function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    let times = [video_len, pos, op_start, op_end];
    [video_len, pos, op_start, op_end] = times.map(item => Number(item.split(':')[0]) * 60 + Number(item.split(':')[1]));
    
    if (pos >= op_start && pos <= op_end) pos = op_end;
    
    commands.forEach((item) => {
        switch (item) {
            case 'next': 
                pos += 10;
                break;
                
            case 'prev':
                pos -= 10;
                break;
        }
        if (pos < 0) pos = 0;
        if (pos > video_len) pos = video_len;
        if (pos >= op_start && pos <= op_end) pos = op_end;

    })
    
    const answerMM = Math.floor(pos / 60);
    const answerSS = pos % 60;
    
    answer = (answerMM < 10 ? '0' + answerMM : answerMM) + ':' + (answerSS < 10 ? '0' + answerSS : answerSS);
    
    return answer;
}