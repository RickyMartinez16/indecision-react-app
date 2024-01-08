const app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    options: ["ONE", "TWO", "THREE"]
}

const template1 = 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
    </div>;

const user = {
    name: "Ricky",
    age: 32,
    location: "Atlanta, GA"
}
    
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
    
const template2 = 
    <div>
        <h1>Template 2</h1>
        <h2>{user.name ? user.name : "Anonymous"}</h2>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>{getLocation(user.location)}</p>
    </div>


const appRoot = document.getElementById("app");

ReactDOM.render(template1, appRoot)