import React from 'react';
import { connect } from 'react-redux';
import About from './About.js';

const mapStateToProps = state => {
    return ({
        pageTitle: state.pageTitle || 'About icx.market',
    })
}

const mapDispatchToProps = dispatch => {}

const AboutContainer = connect(mapStateToProps, null)(About);
export default AboutContainer;
