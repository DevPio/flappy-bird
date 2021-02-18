const distElements = (x0,y0,x1,y1) =>{

    let dx = x0 - x1;
    let dy = y0 - y1;
    return Math.sqrt((dx * dx) + (dy * dy))

}

const colision = (min0, max0, min1, max1) => {
    return Math.max(min0, max0) >= Math.min(min1, max1) && 
			   Math.min(min0, max0) <= Math.max(min1, max1);
}

const valid = (r0, r1)=> {
    return colision(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
    colision(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
}