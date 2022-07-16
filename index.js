// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        message: 'What is the description of the project?',
        name: 'description',
    },
    {
        message: 'What is the installation procedure of the project?',
        name: 'install',
    },
    {
        message: 'How do we make use of the project?',
        name: 'usage',
    },
    {
        message: 'How can others contribute to the project?',
        name: 'contribute',
    },
    {
        message: 'How can someone test your project?',
        name: 'tests',
    },
    {
        message: 'What is your GitHub profile username?',
        name: 'github',
    },
    {
        message: 'What is your contact email if someone has questions?',
        name: 'email',
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
            writeToFile("read.md",  response)}
)}

// Function call to initialize app
init();


/**
 *  Title
 *      readme title
 * Description
 *      add stuff
 * Toc
 *      TOC
 * Installation
 *      enter installations procedure
 * Usage
 *      enter usage info
 * License
 *      add badge
 * Contributing
 *      add contribution
 * Tests
 *      add tests
 * Questions
 *      add github with link
 *      add email address
 * 
 * 
 * ask, title, description, Installation, usage, contribution, test
 */