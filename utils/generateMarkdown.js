// Include packages needed for this application
const inquirer = require('inquirer');

// List of available licenses
const licenseOptions = [
    "MIT License",
    "Apache License 2.0",
    "GNU General Public License (GPL) v3.0",
    "BSD 2-Clause 'Simplified' License",
    "BSD 3-Clause 'New' or 'Revised' License",
    "Mozilla Public License 2.0",
    "Creative Commons Zero v1.0 Universal",
    "The Unlicense"
];

// function to prompt the user to select a license
function promptLicense() {
    return inquirer.prompt({
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: licenseOptions
    });
}

// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU General Public License (GPL) v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 2-Clause "Simplified" License':
            return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'BSD 3-Clause "New" or "Revised" License':
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'Creative Commons Zero v1.0 Universal':
            return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)';
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        default:
            return '';
    }
}

// function that returns the license link
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT License':
            return '[MIT License](https://opensource.org/licenses/MIT)';
        case 'Apache License 2.0':
            return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU General Public License (GPL) v3.0':
            return '[GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0)';
        case 'BSD 2-Clause "Simplified" License':
            return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
        case 'BSD 3-Clause "New" or "Revised" License':
            return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
        case 'Mozilla Public License 2.0':
            return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
        case 'Creative Commons Zero v1.0 Universal':
            return '[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)';
        case 'The Unlicense':
            return '[The Unlicense](http://unlicense.org/)';
        default:
            return '';
    }
}

// function that returns the license section of README
function renderLicenseSection(license) {
    switch (license) {
        case 'MIT License':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'Apache License 2.0':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'GNU General Public License (GPL) v3.0':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'BSD 2-Clause "Simplified" License':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'BSD 3-Clause "New" or "Revised" License':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'Mozilla Public License 2.0':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'Creative Commons Zero v1.0 Universal':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        case 'The Unlicense':
            return `This project is licensed under the terms of the ${renderLicenseLink(license)}.`;
        default:
            return '';
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email ${data.email}.
`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
