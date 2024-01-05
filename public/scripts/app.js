"use strict";

var toggle = false;

var onShowDetails = function onShowDetails() {
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onShowDetails },
            toggle === true ? "Hide details" : "Show secret details"
        ),
        toggle ? React.createElement(
            "p",
            null,
            "secret details"
        ) : React.createElement("p", null)
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
