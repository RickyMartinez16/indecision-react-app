class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset(){
        this.setState(() => {
            
        })
    }

    render(){
        return (
        <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>RESET</button>
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