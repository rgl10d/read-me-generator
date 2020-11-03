const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

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
       type: "input",
       name: "usage",
       message: "Explain how to operate/use the project.",
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
    {
       type: "list",
       name: "license",
       message: "Select a usage license.",
       choices: ["MIT License"]
     },
];

// function to write README file
// function writeToFile(fileName, data) {
// }

inquirer.prompt(questions)
  .then((answers) => {
    // const readmeText = `This is the readme text with the ${answers.title} title.`
    fs.writeFile("NEWREADME.md", generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log("ReadMe created!")
    );
  });