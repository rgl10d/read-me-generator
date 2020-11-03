// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [Tests](#tests)
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

To contact me you can:
Visit me at my GitHub page: ${data.github}
Or email me: ${data.email}

---

## License

${data.license}
`;
}

module.exports = generateMarkdown;
