import React from 'react';
import Recaptcha from 'react-gcaptcha';

import { logoutUser } from '../../.././redux/actions/actions';

class Logout extends React.Component {

    constructor() {
        super();

        this.state = {
        }

        this.redirectPage = this.redirectPage.bind(this);

    }

    componentDidMount () {
        !this.props.uname ? this.redirectPage() : this.props.dispatch(logoutUser())
    }

    redirectPage () {
        setTimeout(() => this.props.history.push('/', 1000));
    }

    render () {
        return (
            <div className="auth-page">
                <h4>{this.props.title}</h4>

                { this.props.message }


            </div>

        )
    }
}

export default Logout;
