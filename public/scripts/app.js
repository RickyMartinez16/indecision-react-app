"use strict";

var app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = " ";
    }

    renderApp();
};

var clearOptions = function clearOptions() {
    app.options = [];
    renderApp();
};

var renderApp = function renderApp() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: clearOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    "Option: ",
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    ReactDOM.render(template1, appRoot);
};

var appRoot = document.getElementById("app");

renderApp();
