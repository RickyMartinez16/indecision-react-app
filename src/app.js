var app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    location: "Coming soon to a phone near you!"
}

var template1 = 
    <div>
        <h1>{app.title}</h1> 
        <p>Age: {app.subtitle}</p>
        <p>Location: {app.location}</p>
    </div>;

var user = {
    name: "Ricky",
    age: 32,
    location: "Atlanta, GA"
}
    
    
var template2 = 
    <div>
        <h1>Ricky Martinez, the cool guy!</h1>
        <p>Age: 32</p>
        <p>Location: Brick, New Jersey</p>

    </div>
var appRoot = document.getElementById("app");

ReactDOM.render(template1, appRoot)