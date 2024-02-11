import { createStore, combineReducers } from "redux"; // Importing necessary functions from Redux library
import uuid from "uuid"; // Importing a library to generate unique IDs

// Action generators for expenses---------------------------------------------


// Action creator for adding an expense
const addExpense = ({description = " ", note = " ", amount = 0, createdAt = 0} = {}) => ({ 
    type: "ADD_EXPENSE", // Action type
    expense: { 
        id: uuid(), // Generate a unique ID for the expense
        description, // Expense description
        note, // Expense note
        amount, // Expense amount
        createdAt // Expense creation date
    }
});

// Action creator for removing an expense
const removeExpense = ({id} = {}) => ({ 
    type: "REMOVE_EXPENSE", // Action type
    id // ID of the expense to be removed
});

// Action creator for editing an expense
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE", // Action type
    id, // ID of the expense to be edited
    updates // Updates to apply to the expense
});

// Action creator for setting text filter
const setTextFilter = (text = " ") => ({
    type: "SET_TEXT_FILTER", // Action type
    text // Text to be used as a filter (default is an empty string)
});

// Expenses reducer
const expensesReducerDefaultState = []; // Default state for expenses reducer

const expensesReducer = (state = expensesReducerDefaultState, action) => { // Reducer function for expenses
    switch(action.type){ // Switch statement to handle different action types
        case "ADD_EXPENSE": // If action type is ADD_EXPENSE
            return [...state, action.expense]; // Add the new expense to the state array
        case "REMOVE_EXPENSE": // If action type is REMOVE_EXPENSE
            return state.filter(({id}) => id !== action.id); // Remove the expense with the specified ID from the state
        case "EDIT_EXPENSE": // If action type is EDIT_EXPENSE
            return state.map((expense) => { // Map over the state array
                if(expense.id === action.id){ // If expense ID matches the ID in action
                    return {...expense, ...action.updates }; // Update the expense with new values
                } else {
                    return expense; // Otherwise, return the expense as it is
                }
            });
        default: 
            return state; // If none of the above, return the current state
    }
};

// Filters reducer
const filtersReducerDefaultState = { // Default state for filters reducer
    text: "", // Text filter (default is an empty string)
    sortBy: "date", // Sort by date by default
    startDate: undefined, // Start date filter (default is undefined)
    endDate: undefined // End date filter (default is undefined)
};

const filtersReducer = (state = filtersReducerDefaultState, action) => { // Reducer function for filters
    switch(action.type){ // Switch statement to handle different action types
        case "SET_TEXT_FILTER": // If action type is SET_TEXT_FILTER
            return {...state, text: action.text}; // Update the text filter with the provided text
        default:
            return state; // If none of the above, return the current state
    }
};

const store = createStore( // Creating Redux store
    combineReducers({ // Combining reducers into one root reducer
        expenses: expensesReducer, // Expenses reducer
        filters: filtersReducer // Filters reducer
    })
);

store.subscribe(() => { // Subscribe to changes in the store and log the current state to the console
    console.log(store.getState());
});

// Dispatching actions
const expenseOne = store.dispatch(addExpense({description: "rent", amount: 100})); // Dispatching action to add an expense
const expenseTwo = store.dispatch(addExpense({description: "coffee", amount: 300})); // Dispatching action to add another expense

store.dispatch(removeExpense({id: expenseOne.expense.id})); // Dispatching action to remove an expense
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500})); // Dispatching action to edit an expense
store.dispatch(setTextFilter("rent")); // Dispatching action to set text filter
store.dispatch(setTextFilter()); // Dispatching action to clear text filter

// Sample demo state
const demoState = {
    expenses: [{ // Array of expenses
        id: "aekhflasjkhl",
        description: "January rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: { // Filters object
        text: "rent",
        sortBy: "amount", // Sort by amount
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: "Ricky",
//     age: 32
// }

// console.log({
//     ...user,
//     location: "ATL",
//     name: "Haku"
// })