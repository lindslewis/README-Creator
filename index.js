// Include packages needed for this application
const inquirer = require('inquirer');

// Create an array of questions for user input
//TODO:added questions, however, I'm wondering if the below needs to be laid out differently. 1. either to fit better with the const questions, or to reformat to be inquirer.prompt([questions inside here like below]) have both for now

// array of questions
const questions = ["What is the title of your project?","Please give a brief description of your project.", "Please describe the steps for installation for your intended users.", "Please give a concise description on the intended usage of your project.", "Please describe what the guidelines are for those who may wish to contribute to your project.", "Please describe the steps necessary in order to test your project."]

// inquirer for prompt of same questions above.
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
    }
]);

// input questions for the contact info
const contactInfo = ["What is your Github username?", "What is your email address?"]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(responses)
    fs.writeFile(`./output/${responses.name}.json`, JSON.stringify(responses,null,))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



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
// relevant badge for license is added to readme
// section in readme explains the license it's covered under

// save user responses
// attach user responses to their relevant sections

