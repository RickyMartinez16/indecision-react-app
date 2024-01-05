class Header extends React.Component{
    render(){
        return(
        <div>
            <h1>Title</h1>
            <h2>Sub title</h2>
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
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))