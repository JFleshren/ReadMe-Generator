const inquirer = require('inquirer');
const fs = require('fs');

// List of licenses
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

// questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Provide credits or acknowledgments (if any):'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: licenseOptions
  },
  {
    type: 'input',
    name: 'deployedAppLink',
    message: 'Enter the link to your deployed application (if applicable):'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// function to write README file
function writeToFile(filePath, data) {
  fs.writeFile(filePath, data, err => {
    if (err) {
      console.error('Error writing README file:', err);
      return;
    }
    console.log('README file generated successfully at:', filePath);
  });
}

// function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      // Generate README content based on user input
      const readmeContent = generateREADME(answers);
      // Write README file
      const filePath = './README_generate.md'; // Specify the file path here
      writeToFile(filePath, readmeContent);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
}

// Function to generate README content based on user input
function generateREADME(answers) {
  const {
    title,
    description,
    installation,
    usage,
    contributions,
    tests,
    license,
    deployedAppLink,
    githubUsername,
    email
  } = answers;

  // Initialize README content with title
  let readmeContent = `# ${title}\n\n`;

  // Description section
  readmeContent += `## Description\n\n${description}\n\n`;

  // Table of Contents
  readmeContent += `## Table of Contents\n\n`;
  readmeContent += `- [Installation](#installation)\n`;
  readmeContent += `- [Usage](#usage)\n`;
  readmeContent += `- [License](#license)\n`;
  readmeContent += `- [Contributions](#contributions)\n`;
  readmeContent += `- [Tests](#tests)\n`;
  readmeContent += `- [Questions](#questions)\n`;

  // Installation section
  readmeContent += `## Installation\n\n${installation}\n\n`;

  // Usage section
  readmeContent += `## Usage\n\n${usage}\n\n`;

  // License section
  readmeContent += `## License\n\n`;
  readmeContent += renderLicenseBadge(license) + '\n\n';
  readmeContent += renderLicenseLink(license) + '\n\n';
  readmeContent += renderLicenseSection(license) + '\n\n';

  // Contributions section
  readmeContent += `## Contributions\n\n${contributions}\n\n`;

  // Tests section
  readmeContent += `## Tests\n\n${tests}\n\n`;

  // Questions section with GitHub username and email
  readmeContent += `## Questions\n\n`;
  readmeContent += `For additional questions, contact [${githubUsername}](https://github.com/${githubUsername}) or email ${email}.\n`;

  // Return README content
  return readmeContent;
}

// Function to render license badge
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

// Function to render license link
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

// Function to render license section
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT License':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'Apache License 2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'GNU General Public License (GPL) v3.0':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'BSD 2-Clause "Simplified" License':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'Mozilla Public License 2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'Creative Commons Zero v1.0 Universal':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    case 'The Unlicense':
      return `This project is licensed under the ${renderLicenseLink(license)}.`;
    default:
      return '';
  }
}

// Function call to initialize app
init();
