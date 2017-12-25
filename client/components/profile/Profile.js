import React from 'react';
import { NavLink } from 'react-router-dom';

import { profile } from './../../redux/actions/profile';

class Profile extends React.Component {

    constructor() {
        super();

        this.state = {
            searchLoaded: false,
        }
    }

    componentDidMount() {
        this.props.dispatch(profile({uid: this.props.match.params.uid})).then(() => {
            this.setState({searchLoaded:true});
        });
    }

    render() {

        if(!this.state.searchLoaded) {
            return (
                <div className="load_wrapper">
                    <div className="loading" />
                </div>
            );
        } else {
            return (
                <div className = "ptext">
                    <h3>{ this.props.userProfile.profile_name }</h3>
                    <h4>Location</h4>
                    <p>{ this.props.userProfile.location } </p>
                    <h4>About</h4>
                    <p>{ this.props.userProfile.about_me } </p>
                </div>
            );
        }
    }
}

export default Profile;
