"use strict";

var toggle = false;

var onShowDetails = function onShowDetails() {
    toggle = !toggle;
    render();
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
        toggle && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Super secret details"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
