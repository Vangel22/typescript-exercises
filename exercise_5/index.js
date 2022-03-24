"use strict";
/*
Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

Higher difficulty bonus exercise:

    Exclude "type" from filter criterias.
  
*/
exports.__esModule = true;
exports.persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        type: "admin",
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        type: "user",
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        type: "admin",
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    },
    {
        type: "user",
        name: "Wilson",
        age: 23,
        occupation: "Ball"
    },
    {
        type: "admin",
        name: "Agent Smith",
        age: 23,
        role: "Administrator"
    },
];
exports.isAdmin = function (person) {
    return person.type === "admin";
};
exports.isUser = function (person) {
    return person.type === "user";
};
function logPerson(person) {
    var additionalInformation = "";
    if (exports.isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (exports.isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
exports.logPerson = logPerson;
//Partial sets all the properties of the object to optional
//Omit lets us construct an object without the 'type' property, it excludes a property
function filterUsers(persons, criteria) {
    return persons.filter(exports.isUser).filter(function (user) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterUsers = filterUsers;
console.log("Users of age 23:");
filterUsers(exports.persons, {
    age: 23
}).forEach(logPerson);
