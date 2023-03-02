// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//title of project
//sections entitled:
// - Description
// - table of Contents
// - Installation
// - Usage
// - License
// - Contributing
// - Tests
// - Questions





// WHEN I enter my project title
// THEN this is displayed as the title of the README

// - need to display project title as #title in README



// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// - user information to be updated in their sections once user answer them



// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// - 1 - need to make type of license to be LIST
// - 2 - badge for chosen one added near the top of README
// - 3 - notice to be added in wntitled License that explains which license the application is covered under



// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// - GitHub username to be added in Questions section with a link of user GitHub profile


// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions



// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// - need to link every user input to its specific section







// TODO: Include packages needed for this application

// DONE: Inquirer package added using npm i inquirer@8.2.4 through terminal.


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
