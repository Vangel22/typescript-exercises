"use strict";
// Exercise:
// Given the data, define the interface "User" and use it accordingly.
exports.__esModule = true;
exports.users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
];
function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
exports.logPerson = logPerson;
console.log("Users:");
exports.users.forEach(logPerson);
