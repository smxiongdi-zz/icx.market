import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../.././redux/actions/actions";
import Register from "./Register.js";

const mapStateToProps = state => {
    return({
        uname: state.uname,
        title: "Register",
        error: state.error,
        message: state.message,
    })
}

const mapDispatchToProps = dispatch => {
    return({
        dispatch,
    })
}

const RegisterContainer = connect(mapStateToProps, null)(Register);
export default RegisterContainer;
