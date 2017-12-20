import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../.././redux/actions/actions";
import Logout from "./Logout.js";

const mapStateToProps = state => {
    return({
        uname: state.uname,
        title: "icx.market Logout",
        message: state.message || "Logging out...",
    })
}

const mapDispatchToProps = dispatch => {
    return({
        dispatch,
    })
}

const LogoutContainer = connect(mapStateToProps, null)(Logout);
export default LogoutContainer;
