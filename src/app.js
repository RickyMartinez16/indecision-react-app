const title = "Indecision App";
const subTitle = "Put your life in the hands of a computer beep bop";

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option){
        if(!option){
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1){
            return "This option already exists"
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    render(){
        return(
            <div>
            <Header title={title} subTitle={subTitle}/>
            <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
            </div>
        )
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}

// class Header extends React.Component{
//     render(){
//         return(
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subTitle}</h2>
//         </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
        What Should I Do?</button>
        </div>
    )
}

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//             <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//             >
//             What Should I Do?</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All Options</button>
        {props.options.map((option) => {
            return <Option key={option} optionText={option}/>
        })}
        <Option />
        </div>
    )
}

// class Options extends React.Component{

//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
//             {this.props.options.map((option) => {
//                 return <Option key={option} optionText={option}/>
//             })}
//             <Option />
//             </div>
//         )
//     }
// }

const Option = () => {
    return (
        <div>
        {this.props.optionText}
        </div>
    )
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
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
            }
        })

        e.target.elements.option.value = " "
        
    }

    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            </div>
        )
    }
}

const User = () => {
    return (
        <div>
        <p>Name: </p>
        <p>Age: </p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))