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
                message: action.message
            })
        default:
            return state
    }
}

export default apiReducer;
