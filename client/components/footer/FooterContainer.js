import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer.js';

const mapStateToProps = state => {
    return ({
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
    })
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterContainer;
