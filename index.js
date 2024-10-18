const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');




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

function generateImg() {
    
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${shape} cx="50" cy="50" r="40" fill="${color}"/>
        </svg>
    
    
    `;
}

function init() {

    inquirer.prompt(questions).then(answers => {
        
        const shape = answers.shape;
        const color = answers.color;
        const words = answers.characters;
        const image = generateImg(shapes, color, words);

        function generateImg() {
    
            return `
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <${shape} cx="50" cy="50" r="40" fill="${color}"/>
                </svg>
            
            
            `;
        };

        fs.writeFileSync('image.svg', image);

        console.log(`SVG file has been created using ${shape}, ${color}, and ${words} `);

    })

};




init();

