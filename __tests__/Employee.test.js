//import employees, { Manager } from './../lib/employees'; need to refactor
const employees = require('./../lib/employees');

let employee = new employees.Employee('Employee1', 123, 'employee@fb.com');

test('Employee name', () => {
    expect(employee.getName()).toBe('Employee1');
});

test('Employee id', () => {
    expect(employee.getId()).toBe(123);
});

test('Employee email', () => {
    expect(employee.getEmail()).toBe('employee@fb.com');
});

test('Employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});