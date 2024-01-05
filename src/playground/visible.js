let toggle = false;

const onShowDetails = () => {
    if(toggle){
        toggle = false
    } else {
        toggle = true
    }
}

const render = () => {
    const template = 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>Show Details</button>
            {toggle ? <p>secret details</p> : <p></p>}
        </div>

    ReactDOM.render(template, appRoot)       
}

const appRoot = document.getElementById("app");

render()