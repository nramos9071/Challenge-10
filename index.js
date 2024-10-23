const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');




const questions = [

    {

        type: 'input',
        message: 'Please enter three characters.',
        name: 'characters',
        validate: function (input) {
            if (input.length === 3) {
                return true
            } else {
            return 'Must be three characters.';
    }},

    },

    {
        type: 'type',
        message: 'Please enter a color keyword (OR a hexadecimal number).',
        name: 'color',
    },

    {
        type: 'list',
        message: 'Please choose a shape.',
        name: 'shape',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ],
    },

];

function generateImg(shape, color) {
    let svgElement;

    switch (shape) {
        case 'Circle':
            svgElement = new Circle(300, 200, 50, 50, 40, color);
            break;
        case 'Triangle':
            svgElement = new Triangle(300, 200, "0,200", "100,0", "200,200", color);
            break;
        case 'Square':
            svgElement = new Square(300, 200, 0, 0, 20, 20, color);
            break;
    }

    return svgElement.render();

}


function init() {
    inquirer.prompt(questions).then(answers => {
        const { name, shape, color, characters } = answers;
        const characterObj = new Characters(name);
        characterObj.addCharacters(characters);
        const image = generateImg(shape, color);
        fs.writeFileSync('image.svg', image);
        console.log(`SVG file has been created using ${shape}, ${color}, and characters: ${characterObj.getCharacters()}`);
    });
}


init();

