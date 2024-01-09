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
    )
);

var count = 0;
var add1 = function add1() {
    count++;
    renderCounterApp();
};
var minus1 = function minus1() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: add1 },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minus1 },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "RESET"
        )
    );

    ReactDOM.render(template2, appRoot);
};

var appRoot = document.getElementById("app");

renderCounterApp();
