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

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))
