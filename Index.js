const fs = require('fs');
const inquirer = require('inquirer');
const { Manager } = require('./lib/employees');
const { Engineer } = require('./lib/employees');
const { Intern } = require('./lib/employees');
//const employees = require('./lib/employees');

// Object to hold the team definition
var theTeam = {
    manager: {},
    engineers: [],
    interns: []
}

// Prompt the operator for the next operation. add validations so user cannot skip & add the if statements.
function teamBuildingMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'nextStep',
            message: 'Select option:',
            choices: ['Add Engineer', 'Add Intern', 'Generate HTML']
        }
    ])
    .then(function(data) {
        switch(data.nextStep) {
            case "Add Engineer":
                getEngineerInfo();
                break;
            case "Add Intern":
                getInternInfo();
                break;
            case "Generate HTML":
                generateHTML();
                break;
            default:
                console.log("Someone forgot to add to the case statement!");
        }
    });
}

function getManagerInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email address?:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Managers office number?:'
        }
    ])
    .then(function(data) {
        theTeam.manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );
        teamBuildingMenu();
    });
}

function getEngineerInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'WHat is the the Engineers name?:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers ID number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers GitHub profile:'
        }
    ])
    .then(function(data) {
        theTeam.engineers.push(new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
        ));
        teamBuildingMenu();
    });
}

function getInternInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the Intern attend:'
        }
    ])
    .then(function(data) {
        theTeam.interns.push(new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        ));
        teamBuildingMenu();
    });
}

//       Needs to be re-written to dynamically generate the HTML page.
function generateHTML() {
    console.log(JSON.stringify(theTeam));
}


// function call to initialize program
getManagerInfo();
