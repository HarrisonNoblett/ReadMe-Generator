const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
            type: 'input',
            message: 'Table of Contents.',
            name: 'Table of Contents',
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
            type: 'input',
            message: 'License.',
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
            type: 'inpute',
            message: 'Questions.',
            name: 'Questions',
        }
    ])
    .then((response) => {
        console.log(response)
    fs.writeFile('README.md', createREADME(response)), 
        function (err) {
            if (err) return console.log(err);
    }
    })

function createREADME(response){return 
    `
    ###${response.Title}
    `
}

// function call to initialize program
init();
