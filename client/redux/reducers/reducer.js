import { combineReducers } from "redux";

const settingsReducer = (state = [], action) => {
    switch(action.type) {
        case "THEMESETTINGS_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case "THEMESETTINGS_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
    }
}

const accountReducer = (state = [], action) => {
    switch(action.type) {

        // SEARCH API
        case "SEARCH_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                results: action.results,
            })

        // ICX coinmarketcap API
        case "ICXPRICE_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                ICX: action.ICX,
            })

        // SETTINGS SUCCESSES
        case "THEMESETTINGS_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case "EDITPROFILE_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
            })
        case "MYPROFILE_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                profile: action.profile,
            })



        // NETWORK REQUEST
        case "NETWORK_REQUEST":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })

        // ACCOUNTS SUCCESSES
        case "USER_SESSION_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                uname: action.uname,
                theme: action.theme,
                message: action.message,
            })
        case "LOGIN_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
                uname: action.uname,
                recap: 0,
            })
        case "REGISTER_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
                recap: 0,
            })
        case "CONFIRM_ACCOUNT_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                verifyMessage: action.message
            })
        case "LOGOUT_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                uname: '',
                message: "Logged out"
            })
        case "SITEVERIFY_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                error: action.error,
                recap: action.recap,
            })

        // SEARCH FAILURE
        case "SEARCH_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                results: action.results,
            })

        // ICX coinmarketcap FAILURES
        case "ICXPRICE_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
            })

        // ACCOUNT FAILURES
        case "LOGIN_USER_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
            })
        case "REGISTER_USER_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
            })
        case "CONFIRM_ACCOUNT_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                verifyMessage: action.message,
                pageTitle: action.title
            })
        case "SITEVERIFY_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                error: action.error,
                recap: action.recap,
            })

        // SETTINGS/EDIT FAILURES
        case "THEMESETTINGS_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case "EDITPROFILE_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                error: action.error,
            })
        case "MYPROFILE_FAILURE":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                message: action.message,
                error: action.error,
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({ account:accountReducer, settings: settingsReducer });

export default accountReducer;
