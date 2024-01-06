"use strict";

var user = {
    name: "Baby Yoda",
    age: 56,
    location: "Wherever Mando is"
};

var template1 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Ricky Martinez, the cool guy!"
    ),
    React.createElement(
        "p",
        null,
        "Age: 32"
    ),
    React.createElement(
        "p",
        null,
        "Location: Brick, New Jersey"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template1, appRoot);
