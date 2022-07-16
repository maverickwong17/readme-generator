// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation procedure of the project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do we make use of the project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to the project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How can someone test your project?',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response)
}

// Function call to initialize app
init();


/**
 * Title
 *  readme title
 * Description
 *  add stuff
 * Toc
 *  TOC
 * Installation
 *  enter installations procedure
 * Usage
 *  enter usage info
 * License
 *  add badge
 * Contributing
 *  add contribution
 * Tests
 *  add tests
 * Questions
 *  add github with link
 *  add email address
 * 
 * 
 * ask, title, description, Installation, usage, contribution, test
 */