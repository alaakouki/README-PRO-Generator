// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  console.log("license badge");

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  console.log("license link");

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  console.log("function that returns the license section of README");

}

// TODO: Create a function to generate markdown for README

// function generateMarkdown(data) {
//   return `
//   # ${data.title}

  function generateMarkdown(answers) {
  return `
  # ${userAnswers.title}

// NEED BADGE TO BE SHOWN AT TOP OF README


  ## Description:
  ${userAnswers.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation:
  ${userAnswers.installation}
  
  ## Usage:
  In order to use this project/application, ${userAnswers.usage}
  
  ## License:
  This project/application is licensed under ${userAnswers.license} license.
  
  ## Contributing:
  Contributors:
  ${userAnswers.contributing}
  
  ## Tests:
  ${userAnswers.tests}
  
  ## Questions:
  ```
` Please feel free to check my GitHub page: [${userAnswers.gitHubUserName}](https://github.com/${userAnswers.gitHubUserName})

Or for more information or queries, please don't hesitate to send me email to: ${userAnswers.email} `

```



`;
}

module.exports = generateMarkdown;
