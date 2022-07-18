// Include packages needed for this application
const inquirer = require('inquirer');

// Create an array of questions for user input
//TODO:added questions, however, I'm wondering if the below needs to be laid out differently. 1. either to fit better with the const questions, or to reformat to be inquirer.prompt([questions inside here like below])???? 
const questions = [
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
