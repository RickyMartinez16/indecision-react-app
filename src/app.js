import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        404!
    </div>
)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))
