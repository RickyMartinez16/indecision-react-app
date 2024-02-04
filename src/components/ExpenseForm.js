import React, { Component } from "react";

class ExpenseForm extends Component {
    state = {
        description: ""
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description" autoFocus></input>
                    <input type="number" placeholder="Amount"></input>
                    <textarea placeholder="Add a note for your expense (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;