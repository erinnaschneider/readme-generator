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
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease include the name of your project :)\n`);
                return false;
            }
        }
    },
    {
        name: 'projectDescription',
        message: 'How would you describe your project?',
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease include a description of your project :)\n`);
                return false;
            }
        }
    },
    {
        name: 'installationInstructions',
        message: 'How can a user install your project?',
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease describe how to install your project :)\n`);
                return false;
            }
        }
    },
    {
        name: 'howTo',
        message: 'How is your application used?',
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease describe how your application is used :)\n`);
                return false;
            }
        }
    },
    {
        name: 'who',
        message: 'Who contributed to making this project?',
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease include the names of the project's contributors :)\n`);
                return false;
            }
        }
    },
    {
        name: 'license',
        message: 'What is the license you want to use?',
        type: 'list',
        choices: ['MIT', 'Apache', 'IBM', 'None'],
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease pick a license :)\n`);
                return false;
            }
        }
    },
    {
        name: 'email',
        message: 'What e-mail can you be best reached by?',
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease include your e-mail address :)\n`);
                return false;
            }
        }
    },
    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input',
        validate: res => {
            if (res) {
                return true;
            } else {
                console.log(`\n\nPlease include your GitHub username :)\n`);
                return false;
            }
        }
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
