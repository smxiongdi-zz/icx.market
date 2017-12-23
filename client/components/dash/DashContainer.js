import React from 'react';
import { connect } from 'react-redux';
import Dash from './Dash.js';

const mapStateToProps = state => {
    return ({
        pageTitle: state.pageTitle || 'icx.market dashboard',
        uname: state.uname,
        profile: state.profile,
    })
}

const mapDispatchToProps = dispatch => {}

const DashContainer = connect(mapStateToProps, null)(Dash);
export default DashContainer;
