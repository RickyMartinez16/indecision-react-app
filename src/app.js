const title = "Indecision App";
const subTitle = "Put your life in the hands of a computer beep bop";
const options = ["uno", "dos", "tres"]

class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
            <Header title={title} subTitle={subTitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
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
            {this.props.options.map((option) => {
                return <p key={option}>{option}</p>
            })}
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