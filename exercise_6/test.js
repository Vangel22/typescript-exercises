"use strict";
exports.__esModule = true;
var type_assertions_1 = require("type-assertions");
var index_1 = require("./index");
type_assertions_1.typeAssert();
var filtered1 = index_1.filterPersons(index_1.persons, "user", {});
type_assertions_1.typeAssert();
var filtered2 = index_1.filterPersons(index_1.persons, "user", {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep"
});
type_assertions_1.typeAssert();
var filtered3 = index_1.filterPersons(index_1.persons, "admin", {});
type_assertions_1.typeAssert();
var filtered4 = index_1.filterPersons(index_1.persons, "admin", {
    name: "Jane Doe",
    age: 32,
    role: "Administrator"
});
type_assertions_1.typeAssert();
type_assertions_1.typeAssert();
type_assertions_1.typeAssert();
type_assertions_1.typeAssert();
type_assertions_1.typeAssert();
