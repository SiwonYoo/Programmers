function solution(wallpaper) {    
    let existArr = [];
    wallpaper.forEach((row, xIdx) => {
        Array.from(row).forEach((item, yIdx) => {
            item === '#' && existArr.push([xIdx, yIdx]);
        })
    })
        
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    
    existArr.forEach(item => {
        lux = Math.min(item[0], lux);
        luy = Math.min(item[1], luy);
        rdx = Math.max(item[0], rdx);
        rdy = Math.max(item[1], rdy);
    })
    
    return [lux, luy, rdx + 1, rdy + 1];
}