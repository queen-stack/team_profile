const employees = require('./../lib/employees');

let engineer = new employees.Engineer('Engineer3', 456, 'engineer@fb.com', 'githubusername');

test('Engineer name', () => {
    expect(engineer.getName()).toBe('Engineer3');
});

test('Engineer id', () => {
    expect(engineer.getId()).toBe(456);
});

test('Engineer email', () => {
    expect(engineer.getEmail()).toBe('engineer@fb.com');
});

test('Manager github username', () => {
    expect(engineer.getGithub()).toBe('githubusername');
});

test('Engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});