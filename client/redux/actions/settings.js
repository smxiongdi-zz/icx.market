import { normalize } from "normalizr";
// import APIs
import { themeSettingsAPI, editProfileAPI, myProfileAPI } from "../.././api/settings";
// import reducers

export const myProfile = () => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return myProfileAPI().then(
        response => {
            dispatch({
                type: "MYPROFILE_SUCCESS",
                isFetching: false,
                profile: response.profile,
            });
        },
        error => {
            dispatch({
                type: "MYPROFILE_FAILURE",
                isFetching: false,
            });
        }
    );
}

export const editProfile = (editedProfile) => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return editProfileAPI(editedProfile).then(
        response => {
            dispatch({
                type: "EDITPROFILE_SUCCESS",
                isFetching: false,
                message: response.message,
            });
        },
        error => {
            dispatch({
                type: "EDITPROFILE_FAILURE",
                isFetching: false,
                message: response.message,
                error: response.error,
            });
        }
    );
}

export const themeSettings = (theme) => (dispatch) => {

    dispatch({ type: "NETWORK_REQUEST", isFetching: true });

    return themeSettingsAPI(theme).then(
        response => {
            dispatch({
                type: "THEMESETTINGS_SUCCESS",
                isFetching: false,
            });
        },
        error => {
            dispatch({
                type: "THEMESETTINGS_FAILURE",
                isFetching: false,
            });
        }
    );
}
