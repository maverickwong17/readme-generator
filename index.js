// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { title } = require('process');
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
        message: 'What kind of license should your project have?',// MIT, APACHE 2.0, GPL 3.0, BSD 3, None 
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
        name: 'tests',
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
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile("genReadme.md",  response)}
)}

// Function call to initialize app
init();

// var conditions =
// ```md
// GIVEN a command-line application that accepts user input
// // WHEN I am prompted for information about my application repository
// // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// // WHEN I enter my project title
// // THEN this is displayed as the title of the README
// // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// // WHEN I enter my GitHub username
// // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// // WHEN I enter my email address
// // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// // WHEN I click on the links in the Table of Contents
// // THEN I am taken to the corresponding section of the README
// ```
