

// Action creator for setting text filter
const setTextFilter = (text = " ") => ({
    type: "SET_TEXT_FILTER", // Action type
    text // Text to be used as a filter (default is an empty string)
});

//Action creater for changing the sort by to date
const sortByDate = (sortBy) => ({
    type: "SORT_BY_DATE",
    sortBy
})

//Action creater for changing the sort by amount
const sortByAmount = (sortBy) => ({
    type: "SORT_BY_AMOUNT",
    sortBy
})

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})