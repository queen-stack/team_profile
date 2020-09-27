const inquirer = require('inquirer');
const { Manager, Engineer, Intern } = require('./lib/employees');
const generatePage = require('./src/template');
const { writeFile, copyFile } = require('./utils/generate-site');

// Prompt the operator for the next operation. 
const teamBuildingMenu = theTeam => {
    console.log(`
    ==============
    Make a choice
    ==============
    `);
    return inquirer.prompt([
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
                return getEngineerInfo(theTeam);
                break;
            case "Add Intern":
                return getInternInfo(theTeam);
                break;
            case "Generate HTML":
                return theTeam;
                break;
            default:
                console.log("Someone forgot to add to the case statement!");
        }
    });
}

const getManagerInfo =() => {
    console.log(`
    ==================
    Enter Manager Info
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Managers Name: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter Managers Name to Proceed')
                }
            }

        },
    {
            type: 'input',
            name: 'id',
            message: 'Enter Managers ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Managers email address:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Managers office number:'
        }
    ])
    .then( data => {
        var theTeam = {
            manager: {},
            engineers:[],
            interns:[]
        };
        theTeam.manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );
        return teamBuildingMenu(theTeam);
    });
};

const getEngineerInfo = theTeam => {
    console.log(`
    ===================
    Enter Engineer Info
    ===================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Engineers name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Engineers ID number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Engineers email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Engineers GitHub profile: (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter Engineer GitHub profile!');
                    return false;
                }
                }
            }
    ])
    .then( data => {
        theTeam.engineers.push(new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
        ));
        return teamBuildingMenu(theTeam);
    });
};

const getInternInfo = theTeam => {
    console.log(`
    =================
    Enter Intern Info
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Interns name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Interns ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Interns email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter Interns School:'
        }
    ])
    .then( data => {
        theTeam.interns.push(new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        ));
        return teamBuildingMenu(theTeam);
    });
};

// function call to initialize program
getManagerInfo()
    .then(theTeam =>{
        return generatePage(theTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    }).catch(err => {
        console.log(err);
    });