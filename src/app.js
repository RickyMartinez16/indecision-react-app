const app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    options: []
}

const template1 = 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Option 1</li>
            <li>Option 2</li>
        </ol>
        <form>
            <input type="text" name="option"></input>
            <button>Add option</button>
        </form>
    </div>;

const appRoot = document.getElementById("app");
ReactDOM.render(template1, appRoot)