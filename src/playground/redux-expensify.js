import { createStore, combineReducers } from "redux";


//Expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default: 
        return state
    }
}

//filters reducer
const filtersReducerDefaultState = {
    text: "", 
    sortBy: "date", 
    stateDate: undefined, 
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        default:
        return state
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

console.log(store.getState())

const demoState = {
    expenses: [{
        id: "aekhflasjkhl",
        description: "January rent",
        note: "This wa the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

