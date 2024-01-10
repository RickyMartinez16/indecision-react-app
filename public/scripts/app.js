"use strict";

var app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    options: ["ONE", "TWO", "THREE"]
};

var template1 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options:" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Option 1"
        ),
        React.createElement(
            "li",
            null,
            "Option 2"
        )
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template1, appRoot);
