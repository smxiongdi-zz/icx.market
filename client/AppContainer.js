import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { userSession } from './redux/actions/actions';

import App from './App.js';

const mapStateToProps = state => {
    return({
        uname: state.uname,
        profile: state.profile,
        theme: state.theme,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
        fetchSession: () => dispatch(userSession()),
    })
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
