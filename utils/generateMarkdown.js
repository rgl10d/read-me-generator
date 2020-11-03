

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}


## Credits

${data.contribution}

## License

${data.license}

---

## Questions?
You can visit me at my GitHub page: ${data.github}
Or email me at: ${data.email}

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Tests

`;
}

module.exports = generateMarkdown;
