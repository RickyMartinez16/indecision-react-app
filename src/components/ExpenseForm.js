import React, { Component } from "react";

class ExpenseForm extends Component {
    state = {
        description: "",
        note: "",
        amount: ""
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    >
                    </input>
                    <input 
                        type="text" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                    </input>
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;