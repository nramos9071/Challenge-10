function shapes(height, width) {

    this.height = height;
    this.width = width;

}

function triangle(height, width) {
    
    shapes.call(this, height, width);
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;

    this.rentriangle = function () {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${point1}, ${point2}, ${point3}" fill="${color}"/>
        </svg>
    
    
    `
    }
   

}

function circle(height, width) {
    
    shapes.call(this, height, width);
    this.cx = cx;
    this.cy = cy;
    this.r = r;

    
    this.rencircle = function () {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>
        </svg>
    
    
    `
    }
   

}



function square(height, width) {
    
    shapes.call(this, height, width);
    this.x = x;
    this.y = y;
    this.rx = rx;
    this.ry = rv;


    this.rencircle = function () {
        return `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200 x="${x}" y="${y}" rx="${rx}" ry="${ry}" fill="${color}"/>
        </svg>
    
    
    `
    }
   

}

const triangle1 = new triangle(0, 200 100, 0 200, 200)


module.exports = shapes;