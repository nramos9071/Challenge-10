const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const Characters = require('./lib/characters');




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
        type: 'input',
        message: 'Please enter a color for the characters (keyword or hexadecimal).',
        name: 'characterColor',
    },

    {
        type: 'type',
        message: 'Please enter a color keyword (OR a hexadecimal number).',
        name: 'shapeColor',
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

function generateImg(shape, shapeColor, characters) {
    let svgElement;

    switch (shape) {
        case 'Circle':
            svgElement = new Circle(300, 200, 150, 100, 80, shapeColor);
            break;
        case 'Triangle':
            svgElement = new Triangle(300, 200, "150,0", "0,200", "300,200", shapeColor);
            break;
        case 'Square':
            svgElement = new Square(300, 200, 50, 50, 20, 20, shapeColor);
            break;
    }

    return `
        ${svgElement.render()}
        <text x="50%" y="50%" fill="${characters.getColor()}" font-size="40" text-anchor="middle" dy=".3em">${characters.getCharacters()}</text>
    `;
}


function init() {
    inquirer.prompt(questions).then(answers => {
        const { name, shape, shapeColor, characters: charInput, characterColor } = answers;
        const characterObj = new Characters(name, characterColor);
        characterObj.addCharacters(charInput);
        const image = generateImg(shape, shapeColor, characterObj);
        fs.writeFileSync('image.svg', image);
        console.log(`SVG file has been created using ${shape}, ${shapeColor} for shape and characters: ${characterObj.getCharacters()} with color ${characterObj.getColor()}`);
    });
}


init();

