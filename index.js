const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project's title?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for the project.",
    },
    {
      type: "input",
      name: "installation",
      message: "How is the program installed?",
    },
    {
      type: "list",
      name: "usage",
      message: "Select a usage license.",
      choices: ["MIT License"]
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter information on any project contributors.",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub profile link.",
    },
        {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
  ])
  .then((answers) => {
    const readmeText = `This is the readme text with the ${answers.title} title.`
    fs.writeFile("NEWREADME.md", readmeText, (err) =>
        err ? console.error(err) : console.log("Commit logged!")
    );
  });
// function to write README file
// function writeToFile(fileName, data) {
// }


// function to initialize program
// function init() {

// }

// function call to initialize program
// init();


