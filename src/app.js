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

const jsx = (
    <div>
    <Header />
    <Action />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))