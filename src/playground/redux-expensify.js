import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({description = " ", note = " ", amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: { 
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


//Expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [...state, action.expense]
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

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addExpense({description: "rent", amount: 100}));
store.dispatch(addExpense({description: "coffee", amount: 300}));

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

