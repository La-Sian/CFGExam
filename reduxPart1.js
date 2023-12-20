// redux Part 1

// 1. Can you provide a brief summary of what is happening in this function code?
// this reducer handles the specific action of incrementing a numerical value in the Redux state when triggered by an action of type 'increment'.


// 2. Add one action that tells the reducer to reduce the state value by 1

function countReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            value: state.value + 1
        };
    } else if (action.type === 'decrement') {
        return {
            value: state.value - 1
        };
    }
    return state;
}

// 3. Add one action that tells the reducer to reset the state

function countReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            value: state.value + 1
        };
    } else if (action.type === 'reset') {
        return initialState;
    }
    return state;
}
