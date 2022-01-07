// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path= require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the name of your project?',
        type: 'input'
    },
    {
        name: 'projectDescription',
        message: 'How would you describe your project?',
        type: 'input'
    },
    {
        name: 'installationInstructions',
        message: 'How can a user install your project?',
        type: 'input'
    },
    {
        name: 'howTo',
        message: 'How is your application used?',
        type: 'input'
    },
    {
        name: 'who',
        message: 'Who contributed to making this project?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What is the license you want to use?',
        type: 'list',
        choices: ['MIT', 'Apache', 'IBM', 'None']
    },
    {
        name: 'email',
        message: 'What e-mail can you be best reached by?',
        type: 'input'
    },
    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        writeToFile('./destination/README.md', generateMarkdown({...responses}))
    });
}

// Function call to initialize app
init();
