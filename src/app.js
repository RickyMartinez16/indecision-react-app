import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

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

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))
