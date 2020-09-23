const fs = require('fs');
const inquirer = ('inquirer');
const generateTemplate = require("./Src/template");

// WHEN I start the application
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        
        // WHEN I enter the team manager’s name, employee ID, email address, and office number
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  
const info = [
    {
        type: 'input',
        name: "name",
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: "Employee ID",
        message: "Please enter Team Manager's 6 digit Employee ID?(Required)",
        let eeidLength = Number(prompt("Employee ID must be 6 numbers"));
        eeidLength = Math.floor(eeidLength);  // ensure is a whole number
        if (!isValidEeidLength(EeidLength)){
        alert ("Employee ID must be 6 numbers")
        EeidLength = 6;
   }
   return eeidLength;

]


class Employee {
    constructor(role) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
getName()
getId()
getEmail()
getRole() // Returns 'Employee'

class Manager {
    constructor(role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
getName()
getId()
getEmail()
getOffice()
getRole() // Returns 'Manager'

class Engineer {
    constructor(role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
getName()
getId()
getEmail()
getGithub()
getRole() // Returns 'Engineer'

class Intern {
    constructor(role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = this.school;
getName()
getId()
getEmail()
getSchool()
getRole() // Returns 'Intern'      
    }
}