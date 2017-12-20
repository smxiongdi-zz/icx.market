import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../.././redux/actions/actions";
import Login from "./Login.js";

const mapStateToProps = state => {
    return({
        uname: state.uname,
        title: "Login",
        error: state.error,
        message: state.message,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        dispatch,
    })
}

const LoginContainer = connect(mapStateToProps, null)(Login);
export default LoginContainer;
