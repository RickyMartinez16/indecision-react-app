"use strict";

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
            null,
            "Show Details"
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
