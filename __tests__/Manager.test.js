//import employees, { Manager } from './../lib/employees';
const employees = require('./../lib/employees');

let manager = new employees.Manager('Manager2', 345, 'manager@fb.com', 123);

test('Manager name', () => {
    expect(manager.getName()).toBe('Manager2');
});

test('Manager id', () => {
    expect(manager.getId()).toBe(345);
});

test('Manager email', () => {
    expect(manager.getEmail()).toBe('manager@fb.com');
});

test('Manager office number', () => {
    expect(manager.getOfficeNumber()).toBe(123);
});

test('Manager role', () => {
    expect(manager.getRole()).toBe('Manager');
});
