"use strict";

var app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    location: "Coming soon to a phone near you!"
};

var template1 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        app.location
    )
);

var user = {
    name: "Ricky",
    age: 32,
    location: "Atlanta, GA"
};

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
