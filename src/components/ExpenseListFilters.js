import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters"; // Importing action creator for setting text filter

const ExpenseListFilters = (props) => ( // Functional component for expense list filters
    <div>
        <input 
            type="text" 
            value={props.filters.text} // Value of the input field is bound to the text filter in the Redux store
            onChange={(e) => { // Event handler for input change
                props.dispatch(setTextFilter(e.target.value)) // Dispatching action to set text filter with the input value
            }}
        ></input>
    </div>
)

const mapStateToProps = (state) => { // Function to map Redux store state to component props
    return {
        filters: state.filters // Mapping filters state from Redux store to component props
    }
}

export default connect(mapStateToProps)(ExpenseListFilters); // Connecting component to Redux store and exporting it
