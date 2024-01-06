var user = {
    title: "Baby Yoda",
    subtitle: 56,
    location: "Coming soon near you!"
}

var app = 
    <div>
        <h1>{user.title}</h1> 
        <p>Age: {user.subtitle}</p>
        <p>Location: {user.location}</p>
    </div>;
    
var template2 = 
    <div>
        <h1>Ricky Martinez, the cool guy!</h1>
        <p>Age: 32</p>
        <p>Location: Brick, New Jersey</p>

    </div>
var appRoot = document.getElementById("app");

ReactDOM.render(template1, appRoot)