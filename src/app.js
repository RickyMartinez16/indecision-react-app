
var template = <div><h1>Indecision App</h1> <p>This is a parafgraph tag</p></div>;

var template2 = 
    <div>
        <h1>Ricky Martinez</h1>
        <p>Age: 32</p>
        <p>Location: New Jersey</p>

    </div>
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot)