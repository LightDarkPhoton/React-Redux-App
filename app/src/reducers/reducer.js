
export const initialState = {
    loading: false,
    quote: ""
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCHING_QUOTE_START":
            return {...state, loading: true}
        case "FETCHING_QUOTE_SUCCESS":
            return {...state, quote: action.payload, loading: false}
        case "FETCHING_QUOTE_FAILURE":
            return { ...state, error: action.payload, loading: false}
        default:
            return state
    }
}