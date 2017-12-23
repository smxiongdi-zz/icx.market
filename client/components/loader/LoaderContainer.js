import React from 'react';
import { connect } from 'react-redux';
import { userSession } from './../../redux/actions/actions';

import Loader from './Loader.js';

const mapStateToProps = state => {
    return ({
        theme: state.theme,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
        fetchSession: () => dispatch(userSession()),
    })
}

const LoaderContainer = connect(mapStateToProps, mapDispatchToProps)(Loader);
export default LoaderContainer;
