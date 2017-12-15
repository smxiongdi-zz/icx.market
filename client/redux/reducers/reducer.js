import { combineReducers } from "redux";

const ndApp = combineReducers({ });

const apiReducer = (state = [], action) => {
    switch(action.type) {
        case "NETWORK_REQUEST":
            return Object.assign({}, state, {
                isFetching: action.isFetching
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

export default apiReducer;
