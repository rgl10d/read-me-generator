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
       choices: ["MIT License", "2", "3"]
     },
];
console.log(questions[7].choices);

// Array of written out licenses
const licenses = [`MIT License

  Copyright (c) [year] [fullname]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`, `222222222222`, `33333333333333`]

// function to write README file
// function writeToFile(fileName, data) {
// }

// Inquirer questions function call 
inquirer.prompt(questions)
  .then((answers) => {
    for(i=0; i < licenses.length; i++){
      if(answers.license === questions[7].choices[i]){
        answers.license = licenses[i];
        fs.writeFile("NEWREADME.md", generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log("ReadMe created!")
      )};
    }
  });