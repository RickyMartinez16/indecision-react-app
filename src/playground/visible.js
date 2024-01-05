const onShowDetails = (){

}

const render = () => {
    const template = 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>Show Details</button>

        </div>

    ReactDOM.render(template, appRoot)       
}

const appRoot = document.getElementById("app");

render()