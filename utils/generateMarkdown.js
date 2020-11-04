// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.badge}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}

## Tests

${data.tests}

## Credits

${data.contribution}

## Questions?

Visit me at my GitHub page: ${data.github}

Or email me: ${data.email}

## License

${data.license}
`;
}

module.exports = generateMarkdown;
