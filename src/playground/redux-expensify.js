import { createStore, combineReducers } from "redux";


//Expenses reducer

const expensesReducer = (state = [], action => {
    
})

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

