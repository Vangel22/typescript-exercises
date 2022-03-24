"use strict";
/*

Exercise:

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

*/
exports.__esModule = true;
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];
function isAdmin(person) {
    return person.type === "admin";
}
exports.isAdmin = isAdmin;
function isUser(person) {
    return person.type === "user";
}
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = "";
    if (isAdmin(person) && "role" in person) {
        additionalInformation = person.role;
    }
    if (isUser(person) && "occupation" in person) {
        additionalInformation = person.occupation;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
exports.logPerson = logPerson;
console.log("Admins:");
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log("Users:");
exports.persons.filter(isUser).forEach(logPerson);
