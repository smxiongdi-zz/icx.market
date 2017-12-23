import React from 'react';
import { NavLink } from 'react-router-dom';

class Dash extends React.Component {

    constructor() {
        super();

        this.state = {
            noProfile: <div><p>user profile does not exist</p><p><NavLink to = {{ pathname: "/edit" }}>Click here to get started.</NavLink></p></div>,
            profileDisplay: <p>Profile details go here</p>,
        }
    }

    componentDidMount() {
        !this.props.uname ?
            this.props.history.push("/login") :
            '';
    }

    render() {
        return (
            <div className = "ptext">
                <h3>{this.props.pageTitle}</h3>
                <p>user account: {this.props.uname}</p>

                {
                    !this.props.profile ?
                        this.state.noProfile :
                        this.state.profileDisplay
                }
            </div>
        );
    }
}

export default Dash;
