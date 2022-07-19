// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        message: 'What is your contact email?',
        name: 'email',
    },
    {
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        message: 'Please write a short description of yoour project:',
        name: 'description',
    },
    {
        type: "list",
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        name: 'install',
    },
    {
        message: 'What command should be run to run test?',
        default: 'npm test',
        name: 'test',
    },
    {
        message: 'How do we make use of the project?',
        name: 'usage',
    },
    {
        message: 'How can others contribute to the project?',
        name: 'contribute',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log('Success!')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {writeToFile("genReadme.md",  response)}
)}

// Function call to initialize app
init();