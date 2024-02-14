import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters"

export default () => {
        const store = createStore( // Creating Redux store
        combineReducers({ // Combining reducers into one root reducer
            expenses: expensesReducer, // Expenses reducer
            filters: filtersReducer // Filters reducer
        })
    );
    return store
}