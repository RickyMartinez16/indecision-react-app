let toggle = false;

const onShowDetails = () => {
    toggle = !toggle
    render()
}

const render = () => {
    const template = 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{toggle === true ? "Hide details" : "Show secret details"}</button>
            {toggle && (
                <div>
                <p>Super secret details</p>
                </div>
            )}
        </div>

    ReactDOM.render(template, appRoot)       
}

const appRoot = document.getElementById("app");

render()