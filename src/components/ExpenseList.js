import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.length === 0 && <p>Please add an expense</p>}
        {props.expenses.map((expense) => {
            return <ExpenseListItem {...expense}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);

