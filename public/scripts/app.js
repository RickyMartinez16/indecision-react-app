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
    return console.log("fire");
};

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
    )
);

// const user = {
//     name: "Ricky",
//     age: 32,
//     location: "Atlanta, GA"
// }

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const template2 = 
//     <div>
//         <h1>Template 2</h1>
//         <h2>{user.name ? user.name : "Anonymous"}</h2>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         <p>{getLocation(user.location)}</p>
//     </div>


var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
