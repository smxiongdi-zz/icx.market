import { normalize } from "normalizr";
// import APIs
import { themeSettingsAPI } from "../.././api/settings";
// import reducers

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
