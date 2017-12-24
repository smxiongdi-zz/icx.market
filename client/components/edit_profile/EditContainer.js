import React from 'react';
import { connect } from 'react-redux';
import Edit from './Edit.js';

const mapStateToProps = state => {
    return ({
        pageTitle: state.pageTitle || 'Edit icx.market',
    })
}

const mapDispatchToProps = dispatch => {}

const EditContainer = connect(mapStateToProps, null)(Edit);
export default EditContainer;
