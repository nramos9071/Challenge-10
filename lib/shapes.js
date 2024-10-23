const Color = require('/colors.js'); 

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Triangle extends Shape {
    constructor(height, width, point1, point2, point3, color) {
        super(height, width);
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.color = color;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${this.point1}, ${this.point2}, ${this.point3}" fill="${this.color}"/>
        </svg>
        `;
    }
}

class Circle extends Shape {
    constructor(height, width, cx, cy, r, color) {
        super(height, width);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.color = color;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}"/>
        </svg>
        `;
    }
}

class Square extends Shape {
    constructor(height, width, x, y, rx, ry, color) {
        super(height, width);
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
        this.color = color;
    }

    render() {
        return `
        <svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" x="${this.x}" y="${this.y}" rx="${this.rx}" ry="${this.ry}" fill="${this.color}"/>
        </svg>
        `;
    }
}



module.exports = { Shape, Triangle, Circle, Square };