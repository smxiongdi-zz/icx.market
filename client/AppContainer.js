import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { userSession } from './redux/actions/actions';
import { myProfile } from './redux/actions/settings';
import { ICXPrice } from './redux/actions/icxprice';

import App from './App.js';

const mapStateToProps = state => {
    return({
        uname: state.uname,
        profile: state.profile,
        theme: state.theme,
        ICX: state.ICX,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
        fetchSession: () => dispatch(userSession()),
        fetchProfile: () => dispatch(myProfile()),
        fetchICXInfo: () => dispatch(ICXPrice()),
    })
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
