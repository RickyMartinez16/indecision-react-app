const title = "Indecision App";
const subTitle = "Put your life in the hands of a computer beep bop";

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: ["uno", "dos", "tres"]
        }
    }

    render(){
        return(
            <div>
            <Header title={title} subTitle={subTitle}/>
            <Action hasOptions={this.state.options.length > 0}/>
            <Options options={this.state.options}/>
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
    handlePick(){
        alert("handle pick")
    }

    render(){
        return (
            <div>
            <button onClick={this.handlePick}>Options Button</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAllClick = this.removeAllClick.bind(this)
    }

    removeAllClick(){
        alert("remove all")
    }

    render(){
        return (
            <div>
            <button onClick={this.removeAllClick}>Remove All Options</button>
            {this.props.options.map((option) => {
                return <Option key={option} optionText={option}/>
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
            {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim()

        if(option){
            alert(option);
            e.target.elements.option.value = " "
        }
    }

    render(){
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))