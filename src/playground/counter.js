class Counter extends React.Component {
    handleAddOne(){
        alert("handle add one")
    }

    render(){
        return (
        <div>
        <h1>Count: </h1>
        <button>+1</button>
        <button>-1</button>
        <button>RESET</button>
        </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0
// const add1 = () => {
//     count++
//     renderCounterApp()
// }
// const minus1 = () => {
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0    
//     renderCounterApp()
// }


// const renderCounterApp = () => {
//     const template2 = 
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={add1}>+1</button>
//         <button onClick={minus1}>-1</button>
//         <button onClick={reset}>RESET</button>
//     </div>

//     ReactDOM.render(template2, appRoot)
// }

// const appRoot = document.getElementById("app");

// renderCounterApp();