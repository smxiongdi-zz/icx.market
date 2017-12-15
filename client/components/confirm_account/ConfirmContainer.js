import React from 'react';
import { connect } from 'react-redux';
import Confirm from './Confirm.js';

const mapStateToProps = state => {
    return ({
        pageTitle: state.pageTitle || 'Account Confirmation',
        verifyMessage: state.verifyMessage || 'Currently digging through the database...'
    })
}

const mapDispatchToProps = dispatch => {}

const ConfirmContainer = connect(mapStateToProps, null)(Confirm);
export default ConfirmContainer;
