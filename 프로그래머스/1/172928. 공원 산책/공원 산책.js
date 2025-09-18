function solution(park, routes) {    
    let x, y;
    for (let i=0; i<park.length; i++) {
        if (park[i].indexOf('S') !== -1) {
            [x, y] = [i, park[i].indexOf('S')];
            break;
        }
    }
    
    let [tempX, tempY] = [x, y];
    
    routes.forEach((item) => {
        let [direction, count] = item.split(' ');
        count = Number(count);
        
        switch (direction) {
            case 'E':
                // 공원을 벗어나는지 확인
                if (!['O','S'].includes(park[tempX][tempY+count])) break;
                // 이동 중 장애물을 만나는지 확인
                for (let i=0; i<count; i++) {
                    if (!['O','S'].includes(park[tempX][++tempY])) {
                        tempY = y; // 실패하면 tempY 초기화
                        break;
                    }
                    if (i+1 === count) y = tempY; // 성공하면 y 업데이트
                }
                break;
                
            case 'S':
                if (!park[tempX+count] || !['O','S'].includes(park[tempX+count][tempY])) break;
                for (let i=0; i<count; i++) {
                    if (!['O','S'].includes(park[++tempX][tempY])) {
                        tempX = x; 
                        break;
                    }
                    if (i+1 === count) x = tempX;
                }
                break;
                
            case 'W':
               if (tempY-count < 0) break;
               if (!['O','S'].includes(park[tempX][tempY-count])) break;

                for (let i=0; i<count; i++) {
                    if (!['O','S'].includes(park[tempX][--tempY])) {
                        tempY = y; 
                        break;
                    }
                    if (i+1 === count) y = tempY;
                }
                break;
                
            case 'N':
                if (tempX-count < 0) break;
                if (!park[tempX-count] || !['O','S'].includes(park[tempX-count][tempY])) break;
                for (let i=0; i<count; i++) {
                   if (!['O','S'].includes(park[--tempX][tempY])) {
                        tempX = x; 
                        break;
                    }
                    if (i+1 === count) x = tempX;
                }
                break;
        }
    })
    
    return [x, y];
}