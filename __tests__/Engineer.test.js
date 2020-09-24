const employees = require('./../lib/employees');

let engineer = new employees.Engineer('Engineer3', 333333, 'engineer@app.com', 'mygithubusername');

test('Engineer name', () => {
    expect(engineer.getName()).toBe('Engineer3');
});

test('Engineer id', () => {
    expect(engineer.getId()).toBe(333333);
});

test('Engineer email', () => {
    expect(engineer.getEmail()).toBe('engineer@app.com');
});

test('Manager github username', () => {
    expect(engineer.getGithub()).toBe('mygithubusername');
});

test('Engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});