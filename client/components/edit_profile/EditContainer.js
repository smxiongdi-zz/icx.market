import React from 'react';
import { connect } from 'react-redux';
import Edit from './Edit.js';

const mapStateToProps = state => {
    return ({
        uname: state.uname,
    })
}

const mapDispatchToProps = dispatch => {}

const EditContainer = connect(mapStateToProps, null)(Edit);
export default EditContainer;
