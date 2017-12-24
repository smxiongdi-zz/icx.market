import React from 'react';
import { connect } from 'react-redux';
import Inputs from './Inputs.js';
import { myProfile } from './../../../redux/actions/settings';

const mapStateToProps = state => {
    return ({
        uname: state.uname,
        profile: state.profile,
        message: state.message,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
        fetchProfile: () => dispatch(myProfile()),
    })
}

const InputsContainer = connect(mapStateToProps, mapDispatchToProps)(Inputs);
export default InputsContainer;
