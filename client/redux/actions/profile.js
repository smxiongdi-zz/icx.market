import { normalize } from "normalizr";
// import APIs
import { profileAPI } from "../.././api/profile";
// import reducers

export const profile = (uid) => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return profileAPI(uid).then(
        response => {
            dispatch({
                type: "PROFILE_SUCCESS",
                isFetching: false,
                userProfile: response.userProfile
            });
        },
        error => {
            dispatch({
                type: "PROFILE_FAILURE",
                isFetching: false,
                message: "User does not exist",
                userProfile: {}
            });
        }
    );
}
