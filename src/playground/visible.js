class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleInvisibility = this.handleToggleInvisibility.bind(this);
        this.state = {
            toggle: false
        }
    }

    handleToggleInvisibility(){
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleInvisibility}>{this.state.toggle === true ? "Hide Details" : "Show secrets"}</button>
            {this.state.toggle && (
                <div>
                <p>super secret details from a secret message</p>
                </div>
            )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))