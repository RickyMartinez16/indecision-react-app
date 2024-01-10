const app = {
    title: "Fancy App",
    subtitle: "The fanciest app you've ever seen.",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value

    if(option){
        app.options.push(option)
        e.target.elements.option.value = " "
    }

    renderApp()
}

const renderApp = () => {
    const template1 = 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
        <p>{app.options.length}</p>
        <button>Remove All</button>
        <ol>
            <li>Option 1</li>
            <li>Option 2</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add option</button>
        </form>
    </div>;

    ReactDOM.render(template1, appRoot)
}


const appRoot = document.getElementById("app");

renderApp();
