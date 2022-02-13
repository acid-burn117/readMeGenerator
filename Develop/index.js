// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
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
        type: "input",
        message: "Installation instructions",
        name: "install",
    },
    {
        type: "input",
        message: "What do developers need to know about using this application?",
        name: "usage",
    },
    {
        type: "input",
        message: "Who contributed to the development of this application?",
        name: "contribution",
    },
    {
        type: "input",
        message:"What commands should be run to test the application?",
        name: "tests",
    },
    {
        type: "list",
        message: "what license are you using?",
        name: "license",
        choices: ["Appacge2.0", "BSD3", "MIT", "none"]
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub usewrname?",
        name: "GitHub",
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
