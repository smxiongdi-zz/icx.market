import { combineReducers } from "redux";

const rootReducer = combineReducers({ account:accountReducer });

const apiReducer = (state = [], action) => {
    switch(action.type) {
        case "NETWORK_REQUEST":
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case "USER_SESSION_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                uname: action.uname,
                message: action.message,
            })
        case "LOGIN_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message,
                uname: action.uname
            })
        case "REGISTER_USER_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                message: action.message
            })
        case "CONFIRM_ACCOUNT_SUCCESS":
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                verifyMessage: action.message
            })
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
        default:
            return state
    }
}

export default rootReducer;
