// Define basic Employee attributes, common to all employees
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

// A manager is an employee who also has an office number.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Override  getRole() method to return the manager's role as opposed to the generic Employee role.
    getRole() {
        return 'Manager';
    }
}

// An engineer is an employee who has GitHub profile.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    // Override the getRole() method to return the engineer's role as opposed to the generic Employee role.
    getRole() {
        return 'Engineer';
    }
}

// An intern is an employee who also has a school.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    // Override the getRole() method to return the intern's role as opposed to the generic Employee role.
    getRole() {
        return 'Intern';
    }
}

module.exports = { Employee, Manager, Engineer, Intern };