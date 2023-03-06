// TODO: Include packages needed for this application

// DONE: Inquirer package added using npm i inquirer@8.2.4 through terminal.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input

const questions = [
    {
        name: "projectTitle",
        type: "input",
        message: "Please advise your project/application title ?",
    },
    {
        name: "description",
        type: "input",
        message: "What your project/application is for ?",
    },
    {
        name: "contentsTable",
        type: "input",
        message: "Kindly note that your contents will be updated once you finish your inputs, press enter to continue.",
    },
    {
        name: "installation",
        type: "input",
        message: "Please advise on how to install it ?",
    },
    {
        name: "usage",
        type: "input",
        message: "Please provide instructions and examples how to use it ?",
    },
    {
        name: "license",
        type: "list",
        message: "Which license would you like to use ?",
        // got these license choices from shields.io
        choices: [
            "Apache", "Apache 2", "BSD", "ODbL", "GPL", "MIT", "None"
        ],
    },
    {
        name: "contributing",
        type: "input",
        message: "What is your contribution guidelines ?",
    },
    {
        name: "tests",
        type: "input",
        message: "What are your test instructions ?",
    },
    {
        name: "gitHubUserName",
        type: "input",
        message: "What is your GitHub username ?",
    },
    {
        name: "email",
        type: "input",
        message: "Please advise your email ?",
    },
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        // fs.writeFile("README-PRO.md", generateMarkdown, (error) =>
        error ? console.log(error) : console.log("Success!")
    )
};

// // TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then(userAnswers => {
        writeToFile("README-PRO.md", generateMarkdown(userAnswers));
    });
}
// Function call to initialize app
init();