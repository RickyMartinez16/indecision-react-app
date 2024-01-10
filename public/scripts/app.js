"use strict";

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
