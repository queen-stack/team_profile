const employees = require('./../lib/employees');

let intern = new employees.Intern('Intern4', 789, 'intern@app.com', 'Mac');

test('Intern name', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});

test('Intern id', () => {
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('Intern email', () => {
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('Intern school', () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('Intern role', () => {
    expect(intern.getRole()).toBe('Intern');
});