import React from "react";
import { connect } from "react-redux"; // Importing connect function from react-redux library
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters"; // Importing action creators for filters

const ExpenseListFilters = (props) => ( // Functional component for rendering expense list filters
    <div>
        <input 
            type="text" 
            value={props.filters.text} // Value of the input field is bound to the text filter in the Redux store
            onChange={(e) => { // Event handler for input change
                props.dispatch(setTextFilter(e.target.value)) // Dispatching action to set text filter with the input value
            }}
        ></input>
        <select // Dropdown menu for sorting options
            value={props.filters.sortBy} // Value of the select dropdown is bound to the sortBy filter in the Redux store
            onChange={(e) => { // Event handler for select change
                if(e.target.value === "date"){ // If selected value is "date"
                    props.dispatch(sortByDate()) // Dispatching action to sort by date
                } else if(e.target.value === "amount"){ // If selected value is "amount"
                    props.dispatch(sortByAmount()) // Dispatching action to sort by amount
                }
            }}
        >
            <option value="date">Date</option> {/* Option for sorting by date */}
            <option value="amount">Amount</option> {/* Option for sorting by amount */}
        </select>
    </div>
)

const mapStateToProps = (state) => { // Function to map Redux store state to component props
    return {
        filters: state.filters // Mapping filters state from Redux store to component props
    }
}

export default connect(mapStateToProps)(ExpenseListFilters); // Connecting component to Redux store and exporting it
 // Connecting component to Redux store and exporting it
