import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy

})

const store = createStore((state = { count: 0}, action) => {
    switch (action.type){
        case "INCREMENT":
            return {
                count:  state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count : state.count - action.decrementBy
            }
        case "RESET":
            return {
                count : state.count = 0
            }
        case "SET":
            return {
                count: action.count
            }
        default : 
            return state
    }
});

store.subscribe(() => {
    console.log(store.getState());
})


// store.dispatch({
//     type: "INCREMENT",
//     "incrementBy": 5
// });

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch({
    type: "RESET"
});

// store.dispatch({
//     type: "DECREMENT"
// });

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({
//     type: "DECREMENT",
//     "decrementBy": 10
// });

store.dispatch({
    type: "SET",
    count: 101
})
