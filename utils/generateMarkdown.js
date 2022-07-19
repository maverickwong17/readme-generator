// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  switch (license){
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
      break
    case "APACHE 2.0":
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
      break
    case "GPL 3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
      break
    case "BSD 3":
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
      break
    default:
      break
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link
  switch (license){
    case "MIT":
      link = "(https://opensource.org/licenses/MIT)"
      break
    case "APACHE 2.0":
      link = "(https://opensource.org/licenses/Apache-2.0)"
      break
    case "GPL 3.0":
      link = "(https://www.gnu.org/licenses/gpl-3.0)"
      break
    case "BSD 3":
      link = "(https://opensource.org/licenses/BSD-3-Clause)"
      break
    default:
      break
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section
  if (license !== "None"){let section = `## License \n \n This project is licensed under the ${license} license.`}
  return section
}

function renderLicenseToc(license) { 
  let content
  if (license !== "None"){let content = '* [License](#license)'}
  return content  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseToc(data.license)}
* [Contributing](#contributing-guidlines)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing Guidelines

${data.contribute}

## Tests

## Questions

If there are any questions, please contact me through:
* [GitHub profile](https://github.com/${data.github})
* Email: ${data.email}`;
}

module.exports = generateMarkdown;
