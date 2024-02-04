import React from "react";

const ExpenseForm = () => (
    <div>
        <form>
            <input type="text" placeholder="Description" autoFocus></input>
            <input type="number" placeholder="Amount"></input>
            <textarea placeholder="Add a note for your expense (optional)"></textarea>
            <button>Add Expense</button>
        </form>
    </div>
)

export default ExpenseForm