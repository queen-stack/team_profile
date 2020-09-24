//import employees, { Manager } from './../lib/employees';
const employees = require('./../lib/employees');

let employee = new employees.Employee('Employee1', 111111, 'employee@app.com');

test('Employee name', () => {
    expect(employee.getName()).toBe('Employee1');
});

test('Employee id', () => {
    expect(employee.getId()).toBe(111111);
});

test('Employee email', () => {
    expect(employee.getEmail()).toBe('employee@app.com');
});

test('Employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});