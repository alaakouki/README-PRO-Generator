// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

if (
  license === "Apache" ||
  license === "apache 2" ||
  license === "GPL" ) {

  return `![License](https://img.shields.io/badge/license-${license}-blue)`;

} else if (
  license === "BSD" ||
  license === "MIT" ||
  license === "ODbL" ) {

  return `![License](https://img.shields.io/badge/license-${license}-green)`;

} else {
  return "";
};

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === "Apache" ) {
    return `[Apache](https://opensource.org/license/apache-1-1/)`;
    

  } else if (license === "apache 2"){
    return `[apache 2](https://pitt.libguides.com/openlicensing/apache2)`;

  } else if (license === "GPL"){
    return `[GPL](https://www.techtarget.com/searchdatacenter/definition/GNU-General-Public-License-GNU-GPL-or-simply-GPL)`;

  } else if (license === "BSD"){
    return `[BSD](https://pitt.libguides.com/openlicensing/BSD)`;

  } else if (license === "MIT"){
    return `[MIT](https://pitt.libguides.com/openlicensing/MIT)`;

  } else if (license === "ODbL"){
    return `[ODbL](https://opendatacommons.org/licenses/odbl/)`;

  } else {
 return "";
  
};

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

  function generateMarkdown(userAnswers) {
  return `
# ${userAnswers.projectTitle}
${renderLicenseBadge(userAnswers.license)}


## Description:
${userAnswers.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation:
${userAnswers.installation}
  
## Usage:
In order to use this project/application, ${userAnswers.usage}
  
## License:
This project/application is covered under [${userAnswers.license}](${renderLicenseLink(license)}) license.

## Contributing:
${userAnswers.contributing}
  
## Tests:
${userAnswers.tests}
  
## Questions:

Please feel free to check my GitHub page: [${userAnswers.gitHubUserName}](https://github.com/${userAnswers.gitHubUserName})

Or for more information or queries, please don't hesitate to send me email to: ${userAnswers.email} `;

}

module.exports = generateMarkdown;
