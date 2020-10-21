import axios from 'axios'


export const getQuote = () => (dispatch) => {
    dispatch({ type: "FETCHING_QUOTE_START"})
    axios
        .get('https://api.kanye.rest')
        .then((res) => {
            dispatch({ type: "FETCHING_QUOTE_SUCCESS", payload: res.data.quote })
            console.log(res)
        })
        .catch((err) => {
            dispatch({
                type: "FETCHING_QUOTE_FAILURE",
                payload: err.response.message
            })
        })
}
