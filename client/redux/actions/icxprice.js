import { normalize } from "normalizr";
// import APIs
import { ICXPriceAPI } from "../.././api/icxprice";
// import reducers

export const ICXPrice = () => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return ICXPriceAPI().then(
        response => {
            dispatch({
                type: "ICXPRICE_SUCCESS",
                isFetching: false,
                ICX: response[0],
            });
        },
        error => {
            dispatch({
                type: "ICXPRICE_FAILURE",
                isFetching: false,
                message: "ICX Price API under maintenance",
                ICX: '',
            });
        }
    );
}
