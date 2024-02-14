

// Action creator for setting text filter
export const setTextFilter = (text = " ") => ({
    type: "SET_TEXT_FILTER", // Action type
    text // Text to be used as a filter (default is an empty string)
});

//Action creater for changing the sort by to date
export const sortByDate = (sortBy) => ({
    type: "SORT_BY_DATE",
    sortBy
})

//Action creater for changing the sort by amount
export const sortByAmount = (sortBy) => ({
    type: "SORT_BY_AMOUNT",
    sortBy
})

export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})