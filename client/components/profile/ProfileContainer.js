import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.js';
import { profile } from './../../redux/actions/profile';

const mapStateToProps = state => {
    return ({
        userProfile: state.userProfile,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
    })
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
