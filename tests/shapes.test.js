const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Shape Color Tests', () => {
    test('Triangle should be blue', () => {
        const triangle = new Triangle(300, 200, "150,0", "0,200", "300,200", "blue");
        expect(triangle.color).toBe("blue");
    });

    test('Circle should be blue', () => {
        const circle = new Circle(300, 200, 150, 100, 80, "blue");
        expect(circle.color).toBe("blue");
    });

    test('Square should be blue', () => {
        const square = new Square(300, 200, 50, 50, 20, 20, "blue");
        expect(square.color).toBe("blue");
    });
});