import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header></Header>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter