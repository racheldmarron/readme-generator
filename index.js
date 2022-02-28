const inquirer = require('inquirer'); 
const fs = require('fs');
// const path = require('path'); 
const util = require("util");

const generateMarkdown = require('./util/generateMarkdown');

const questions = [{
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    }, {
        type: "input",
        message: "What is the description of the project?",
        name: "Description"
    }, {
        type: "input",
        message: "What is your Github username?",
        name: "Username"
    }, {
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What is the User Story?",
        name: "User"
    }, {
        type: "input",
        message: "What are the installation instructions?",
        name: "Installation"
    }, {
        type: "input",
        message: "What command should be run for testing?", default: "npm test",
        name: "Testing"
    }, {
        type: "input",
        message: "Are there any other contributors for this project?",
        name: "Contributors"
    }, {
        type: "input",
        message: "What liscenses should your project have?",
        choices: ['MIT', 'GPL', 'APACHE', 'None'], 
        name: "License"
    }
]; 

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }
        else {
            console.log("Success!")
        }
        })
}

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.me", generateMarkdown(data)); 
            console.log(data)

        })
}

init ();