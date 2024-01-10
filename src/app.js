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

const clearOptions = () => {
    app.options = []
    renderApp()
}

const renderApp = () => {
    const template1 = 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
        <button>What Should I do?</button>
        <button onClick={clearOptions}>Remove All</button>
        <ol>
            {
                app.options.map((option) => {
                   return <li key={option}>{option}</li>
                })
            }
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
