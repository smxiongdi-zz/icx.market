import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';

const mapStateToProps = state => {
    return ({
        username: state.username,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
    })
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;
