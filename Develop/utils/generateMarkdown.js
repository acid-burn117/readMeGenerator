// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
  return `![github License](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none"){
    return ""
  }
  return`!`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none"){
    return ""
  }
  return`!`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## description
${data.description}
## Table of Conents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
