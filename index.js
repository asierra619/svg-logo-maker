const fs = require('fs');
const inquirer = require('inquirer');
const {circle, triangle, sqaure} = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three (3) characters for your logo',
        validate: (input) => {
            if (input.length > 3) {
                return 'Please enter no more than 3 characters.'};
            if (input.length < 1) {
                return 'Please enter at least 1 character.'};
            return true;
            }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color name or hexadecimal code for your TEXT'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please Select a Shape from the Following',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color name or hexadecimal code for your SHAPE'
    }
];

function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses)
        console.log('Generated logo.svg')})
    };

init();
