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
        case "SORT_BY_AMOUNT":
            return {...state, sortBy: "amount"};
        case "SORT_BY_DATE":
            return {...state, sortBy: "date"}
        case "SET_START_DATE":
            return {...state, startDate: action.startDate};
        case "SET_END_DATE":
            return {...state, endDate: action.endDate}
        default:
            return state; // If none of the above, return the current state
    }
};

export default filtersReducer