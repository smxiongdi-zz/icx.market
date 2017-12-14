import { normalize } from "normalizr";
// import APIs
import { registerUserAPI } from "../.././api/api";
// import reducers

export const registerUser = (userObject) => (dispatch) => {
    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    // perform API call
    registerUserAPI(userObject).then(
        response => {
            dispatch({
                type: "REGISTER_USER_SUCCESS",
                message: "Verification e-mail sent"
            });
        },
        error => {
            dispatch({
                type: "REGISTER_USER_FAILURE",
                message: error.message || "Registration failure"
            });
        }
    );
}
