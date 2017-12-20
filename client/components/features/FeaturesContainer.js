import React from 'react';
import { connect } from 'react-redux';
import Features from './Features.js';

const mapStateToProps = state => {
    return ({
        pageTitle: state.pageTitle || 'Upcoming features',
    })
}

const mapDispatchToProps = dispatch => {}

const FeaturesContainer = connect(mapStateToProps, null)(Features);
export default FeaturesContainer;
