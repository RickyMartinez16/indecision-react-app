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

const jsx = (
    <div>
    <Header />
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))