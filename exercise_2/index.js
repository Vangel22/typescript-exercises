"use strict";
/*
Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/
exports.__esModule = true;
exports.persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    },
];
function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
