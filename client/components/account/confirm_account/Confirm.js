import React from 'react';
import { Router } from 'react-router-dom';
import { confirmAccount } from '../../.././redux/actions/actions';

class Confirm extends React.Component {

    componentDidMount() {
        this.props.dispatch(confirmAccount({confUrl: this.props.match.params.user_id}));
    }

    render() {
        return (
            <div className = "confirm_page">
                <h1 className="display-4">{this.props.pageTitle}</h1>
                <p>{this.props.verifyMessage}</p>
            </div>
        );
    }
}

export default Confirm;
