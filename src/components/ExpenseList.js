import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.length}
    </div>
)

const ConnectedExpenseList = connect((state) => {
    return {
        expenses: state.expenses
    }
})(ExpenseList);

export default ConnectedExpenseList