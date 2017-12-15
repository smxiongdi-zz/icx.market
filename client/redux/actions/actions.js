import { normalize } from "normalizr";
// import APIs
import { registerUserAPI, confirmAccountAPI } from "../.././api/api";
// import reducers

export const registerUser = (userObject) => (dispatch) => {
    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    // perform API call
    registerUserAPI(userObject).then(
        response => {
            dispatch({
                type: "REGISTER_USER_SUCCESS",
                error: response.error,
                message: response.message
            });
        },
        error => {
            dispatch({
                type: "REGISTER_USER_FAILURE",
                message: response.message || "Registration failure"
            });
        }
    );
}

export const confirmAccount = (confUrl) => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return confirmAccountAPI(confUrl).then(
        response => {
            dispatch({
                type: "CONFIRM_ACCOUNT_SUCCESS",
                isFetching: false,
                message: "Account validated. You may now use your credentials to log in."
            });
        },
        error => {
            dispatch({
                type: "CONFIRM_ACCOUNT_FAILURE",
                isFetching: false,
                title: "404",
                message: "Confirmation link incorrect, or account has already been validated. Try logging in if you have already registered."
            });
        }
    );
};
