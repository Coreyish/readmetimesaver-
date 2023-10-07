// TODO: Include packages needed for this application
// Outer Modules 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Internal Modules 
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/questions").questions;

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "User, What is your GitHub username?",
        name: 'username',
        default: 'Coreyish',
        // method to check answers 
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("User, the program requires a vaild name");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "User, What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("User, a valid GitHub repo is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "User, What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("User, the project requires a title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "User, Please describe your project?",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A description would be helpful for you and others.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileNameleName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success, you did")
        });
}
// TODO: Create a function to initialize app
async function init() {  
    try {

    // Prompt Inquirer questions
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log("Responses accepted! Loading GitHub data...");

    // Call GitHub api for user info
    const userInfo = await api.getUser(userResponses);
    console.log("Your GitHub user data: ", userInfo);

    // Method to pass Inquirer userResponses and GitHub userInfo to generateMarkdown
    console.log("Generating your README next...")
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    // Write markdown to file
    await writeFileAsync('ExampleREADME.md', markdown);

    // Method for debugging
} catch (error) {
    console.log(error);
}
};


// Function call to initialize app
init();
