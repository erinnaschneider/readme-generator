// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path= require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is your name?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What is your name?',
        type: 'list',
        choices: ['license1', 'license2', 'license3', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        writeToFile('README.md', generateMarkdown({...responses}))
    });
}

// Function call to initialize app
init();
