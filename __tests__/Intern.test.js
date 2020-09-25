const employees = require('./../lib/employees');

let intern = new employees.Intern('Intern4', 789, 'intern@app.com', 'Mac');

test('Intern name', () => {
    expect(intern.getName()).toBe('Intern4');
});

test('Intern id', () => {
    expect(intern.getId()).toBe(789);
});

test('Intern email', () => {
    expect(intern.getEmail()).toBe('intern@app.com');
});

test('Intern school', () => {
    expect(intern.getSchool()).toBe('Mac');
});

test('Intern role', () => {
    expect(intern.getRole()).toBe('Intern');
});