import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";


const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 9000, createdAt: 60})); // Dispatching action to add an expense
store.dispatch(addExpense({description: "Gas Bill", amount: 7000, createdAt: 50}));

store.dispatch(setTextFilter("bill")); // Dispatching action to set text filter


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))
