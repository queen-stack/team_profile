const employees = require('./../lib/employees');

let engineer = new employees.Engineer('Engineer3', 456, 'engineer@fb.com', 'githubusername');

test('Engineer name', () => {
    expect(engineer.getName()).toEqual(expect.any(String));
});

test('Engineer id', () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('Engineer email', () => {
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test('Manager github username', () => {
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('Engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});