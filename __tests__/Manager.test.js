//import employees, { Manager } from './../lib/employees';
const employees = require('./../lib/employees');

let manager = new employees.Manager('Name2', 345, 'a@a.com', 123);

test('Manager name', () => {
    expect(manager.getName()).toEqual(expect.any(String));
});

test('Manager id', () => {
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('Manager email', () => {
    expect(manager.getEmail()).toBe('a@a.com');
});

test('Manager office number', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('Manager role', () => {
    expect(manager.getRole()).toBe('Manager');
});
