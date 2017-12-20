import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { userSession } from './redux/actions/actions';

import App from './App.js';

const mapStateToProps = state => {
    return({
        username: state.username,
        profile: state.profile,
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
