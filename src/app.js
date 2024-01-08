var app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    options: ["ONE", "TWO", "THREE"]
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
    
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
    
var template2 = 
    <div>
        <h1>Template 2</h1>
        <h2>{user.name ? user.name : "Anonymous"}</h2>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>{getLocation(user.location)}</p>
    </div>
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot)