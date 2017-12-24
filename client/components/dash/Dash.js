import React from 'react';
import { NavLink } from 'react-router-dom';

class Dash extends React.Component {

    constructor() {
        super();

        this.state = {
            noProfile: <div><p>user profile does not exist</p><div className="footer-link"><NavLink to = {{ pathname: "/edit" }}>Click here to get started.</NavLink></div></div>,

            profileName: "",
            profileLocation: "",
            profileAboutMe: "",
            editProfile: <div className="footer-link"><NavLink to = {{ pathname: "/edit" }}>Edit profile</NavLink></div>,
        }
    }

    componentDidMount() {
        !this.props.uname ?  this.props.history.push("/login") : ''

        if(!this.props.profile) {
            this.props.fetchProfile().then(() => {
                this.props.profile.profile_name ?  this.setState({profileName: <p>name: {this.props.profile.profile_name}</p>}) : ''

                this.props.profile.location ? this.setState({profileLocation: <p>location: {this.props.profile.location}</p>}) : ''

                this.props.profile.about_me ? this.setState({profileAboutMe: <p>about: {this.props.profile.about_me}</p>}) : ''
            })
        } else {

            this.props.profile.profile_name ?  this.setState({profileName: <p>name: {this.props.profile.profile_name}</p>}) : ''

            this.props.profile.location ? this.setState({profileLocation: <p>location: {this.props.profile.location}</p>}) : ''

            this.props.profile.about_me ? this.setState({profileAboutMe: <p>about: {this.props.profile.about_me}</p>}) : ''

        }


    }

    render() {

        return (
            <div className = "ptext">
                <h3>{this.props.pageTitle}</h3>
                <p>user account: {this.props.uname}</p>

                { this.state.profileName }
                { this.state.profileLocation }
                { this.state.profileAboutMe }
                { this.state.editProfile }

            </div>
        );
    }
}

export default Dash;
