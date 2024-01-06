var user = {
    name: "Baby Yoda",
    age: 56,
    location: "Wherever Mando is"
}

var template = 
    <div>
        <h1>{user.name}</h1> 
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>;
    
var template2 = 
    <div>
        <h1>Ricky Martinez, the cool guy!</h1>
        <p>Age: 32</p>
        <p>Location: Brick, New Jersey</p>

    </div>
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot)