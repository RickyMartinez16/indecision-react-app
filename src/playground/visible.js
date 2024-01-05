let toggle = false;

const onShowDetails = () => {
    if(!toggle){
        toggle = true
    } else {
        toggle = false
    }
}

const render = () => {
    const template = 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{toggle === true ? "Hide details" : "Show secret details"}</button>
            {toggle ? <p>secret details</p> : <p></p>}
        </div>

    ReactDOM.render(template, appRoot)       
}

const appRoot = document.getElementById("app");

render()