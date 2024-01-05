const title = "Indecision App";
const subTitle = "Put your life in the hands of a computer beep bop"

class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
        <div>
            <h1>Indecision App</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
            <button>Options Button</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
            <Option />
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
            <p>Here is an option</p>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
            <p>Here is where you add an option</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))