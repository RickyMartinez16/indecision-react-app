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

export default expensesReducer