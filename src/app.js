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



let count = 0
const add1 = () => {
    count++
    renderCounterApp()
}
const minus1 = () => console.log("minus 1")
const reset = () => console.log("reset")


const renderCounterApp = () => {
    const template2 = 
    <div>
        <h1>Count: {count}</h1>
        <button onClick={add1}>+1</button>
        <button onClick={minus1}>-1</button>
        <button onClick={reset}>RESET</button>
    </div>

    ReactDOM.render(template2, appRoot)
}



const appRoot = document.getElementById("app");

renderCounterApp();