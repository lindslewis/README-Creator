// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// README template below:
const generateREADME = (responses) =>
`# ${responses.title}

## Description
${responses.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contribution Guidelines](#Contribution-Guidelines)
4. [Testing](#Testing)
5. [Licensing](#Licensing)
6. [Credits](#Credits)

## Installation
${responses.install}
    
## Usage
${responses.usage}
    
## Contribution Guidelines
${responses.guidelines}
    
## Testing
${responses.test}
    
## Licensing
${responses.license}
    
## Credits
${responses.credits}`

// inquirer for prompts for userinputs.
inquirer.prompt([
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title',
    },
    {
        message: "Please give a brief description of your project.",
        type: 'input',
        name: 'description',
    },
    {
        message: "Please describe the steps for installation for your intended users.",
        type: 'input',
        name: 'install',
    },
    {
        message: "Please give a concise description on the intended usage of your project.",
        type: 'input',
        name: 'usage',
    },
    {
        message: "Please describe what the guidelines are for those who may wish to contribute to your project.",
        type: 'input',
        name: 'guidelines',
    },
    {
        message: "Please describe the steps necessary in order to test your project.",
        type: 'input',
        name: 'test',
    },
    {
        message: "Please list any resources you may have used or referred to.",
        type: 'input',
        name: 'credits',
    },
    {
        message: "Which license would you like to use? Use the up and down arrows to scroll through the options, press the spacebar to select one.",
        type: 'checkbox',
        name: 'license',
        choices: ["Apache License 2.0", "MIT", "ISC", "Mozilla Public License 2.0"],
    },
    {
        message: "What is your Github username?",
        type: 'input',
        name: 'github',
    },
    {
        message: "What is your email address?",
        type: 'input',
        name: 'email',
    }
    // below is my understanding for taking those responses and making a file from it??
]).then((responses)=>{
        console.log(responses);
        const data = generateREADME(responses);
        fs.writeFile(`./output/${responses.title}README.md`, data,
    (err)=>  err ? console.log(err) : console.log('Yay! You made a README!'));
})


// const init = () => {
//     promptQuestions()
//     .then((responses => fs.writeFileSync('userREADME.md', generateREADME(responses))))
//     .then(()=> console.log("Good job!"))
//     .catch((err) => console.log(err))
// }

// init();

// Create a function to write README file

// function writeToFile(fileName, data) {
//     console.log(responses)
//     fs.writeFile(`./output/${responses.name}.json`, JSON.stringify(responses,null,))
// }

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



// User input needed:
// description of project
// installation instructions for project
// usage information
// contribution guidelines
// test instructions
// user input also needed: for contact purposes
// github username
// email address

// user choose license information out of list
    // does the license choice happen in here, the index, or in the generate markdown js???
    // license options:
        // apache license 2.0, GNU GPLv3, MIT, ISC, unilicense, boost softward license, mozilla public license 2.0
// relevant badge for license is added to readme
// section in readme explains the license it's covered under

// save user responses
// attach user responses to their relevant sections

