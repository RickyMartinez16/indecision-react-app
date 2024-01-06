"use strict";

var user = {
    title: "Baby Yoda",
    subtitle: 56,
    location: "Coming soon near you!"
};

var app = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.title
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.subtitle
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
