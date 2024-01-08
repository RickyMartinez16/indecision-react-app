"use strict";

console.log("es6 arrow function js");

var person = "Ricky Martinez";

var getFirstName = function getFirstName(name) {
    return name.split(" ")[0];
};

var getFirstNameArrow = function getFirstNameArrow(name) {
    return name.split(" ")[0];
};

console.log(getFirstName(person));

console.log(getFirstNameArrow(person));
