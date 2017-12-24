import { normalize } from "normalizr";
// import APIs
import { searchAPI } from "../.././api/search";
// import reducers

export const search = () => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return searchAPI().then(
        response => {
            dispatch({
                type: "SEARCH_SUCCESS",
                isFetching: false,
                results: response.results
            });
        },
        error => {
            dispatch({
                type: "SEARCH_FAILURE",
                isFetching: false,
                message: "Failed to get results",
                results: [],
            });
        }
    );
}
