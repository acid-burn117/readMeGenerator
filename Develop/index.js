// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub usewrname?",
        name: "GitHub",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your application",
        name: "description",
    },
    {
        type: "list",
        message: "what license are you using?",
        name: "license",
        choices: ["Appacge2.0", "BSD 3", "MIT","GPL 3.0", "none"]
    },
    {
        type: "input",
        message: "Installation instructions",
        name: "install",
        default: "npm i",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution",
    },
    {
        type: "input",
        message:"What commands should be run to test the application?",
        name: "tests",
        default: "npm test",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile(fileName, data)
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>{
        writeToFile('README.md', generateMarkdown(response))
    }
    )
 }

// Function call to initialize app
init();
