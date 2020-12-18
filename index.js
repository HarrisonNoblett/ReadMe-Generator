// Require methods
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Promted questions using inquirer
const questions = [
        {
            type: 'input',
            message: 'Enter Your Project Title.',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Discription of Application.',
            name: 'Discription',
        },
        {
            type: 'checkbox',
            message: 'Choose all of the bullet points tha apply to you.',
            choices: ['Title', 'Description', 'TableOfContents', 'Installations', 'Usage', 'License', 'Contributing', 'Tests', 'Questions', 'Github', 'Email'],
            name: 'TableOfContents',
        },
        {
            type: 'input',
            message: 'Installation.',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Usage.',
            name: 'Usage',
        },
        {
            type: 'list',
            message: 'Choose the License you used.',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License'],
            name: 'License',
        },
        {
            type: 'input',
            message: 'Contributing.',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Tests.',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'Questions.',
            name: 'Questions',
        },
        {
            type: 'input',
            message: 'Type your Github URL',
            name: 'Github'
        },
        {
            type: 'input',
            message: 'Type your Email',
            name: 'Email'
        } 
            
    ]

// a function to print what the user inputs into the README.md that is created
function writeToFile(fileName, response) {
    if(err){
        return console.log(err);
    }

    return fs.writeToFile(fileName, response);
}

// a function to prompt the questions provided above
function init() {
    inquirer.prompt(questions)
    .then((response) => fs.writeFileSync('README.md', generateMarkdown(response)))
    .then(() => console);
}

init();
