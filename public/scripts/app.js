"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    " ",
    React.createElement(
        "p",
        null,
        "This is a parafgraph tag"
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Ricky Martinez!"
    ),
    React.createElement(
        "p",
        null,
        "Age: 32"
    ),
    React.createElement(
        "p",
        null,
        "Location: New Jersey"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
