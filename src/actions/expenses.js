import uuid from "uuid";

// Action creator for adding an expense
export const addExpense = ({description = " ", note = " ", amount = 0, createdAt = 0} = {}) => ({ 
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
export const removeExpense = ({id} = {}) => ({ 
    type: "REMOVE_EXPENSE", // Action type
    id // ID of the expense to be removed
});

// Action creator for editing an expense
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE", // Action type
    id, // ID of the expense to be edited
    updates // Updates to apply to the expense
});

