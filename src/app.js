import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard ocmpenent
    </div>
)

const AddExpensePage = () => (
    <div>
        This is my add expense page
    </div>
)

const EditExpensePage = () => (
    <div>
        Edit page
    </div>
)

const HelpPage = () => (
    <div>
        Help page
    </div>
)

const NotFoundPage = () => (
    <div>
        404! <Link to="/">Back to Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
        <Header></Header>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))
