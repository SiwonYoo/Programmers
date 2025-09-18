let x, y;

function solution(park, routes) {    
    for (let i=0; i<park.length; i++) {
        if (park[i].includes('S')) {
            [x, y] = [i, park[i].indexOf('S')];
            break;
        }
    }
        
    routes.forEach((item) => {
        let [direction, count] = item.split(' ');
        count = Number(count);
       
        move(direction, count, park);
    })
    
    return [x, y];
}

function move(direction, count, park) {    
    let movement = [];
    
    if (direction === 'E') movement = [0, 1];
    else if (direction === 'S') movement = [1, 0];
    else if (direction === 'W') movement = [0, -1];
    else if (direction === 'N') movement = [-1, 0];
    
    // 공원을 벗어나는지 확인
    if (!park[x + movement[0]*count]) return;
    if (!['O','S'].includes(park[x + movement[0]*count][y + movement[1]*count])) return;
        
    // 이동 중 장애물을 만나는지 확인
    let [tempX, tempY] = [x, y];

    for (let i=0; i<count; i++) {
        tempX += movement[0];
        tempY += movement[1];
        
        if (!['O','S'].includes(park[tempX][tempY])) {
            // 실패하면 초기화
            tempX = x;
            tempY = y; 
            return;
        }
        
        if (i+1 === count) {
            // 성공하면 업데이트
            [x, y] = [tempX, tempY];
        }
    }
    return;
}