import React from 'react';
import { Router } from 'react-router-dom';
// import { } from '../.././redux/actions/actions';

class Features extends React.Component {

    componentDidMount() { }

    render() {
        return (
            <div className = "ptext">
                <h1 className="display-4">{this.props.pageTitle}</h1>
                <ul>
                    <li>
                        <strike>Community search features</strike>
                    </li>
                    <li>
                        <strike>Profile editing with features such as location</strike>
                    </li>
                    <li>
                        Advertising features for buying/selling
                    </li>
                    <li>
                        SSL support
                    </li>
                    <li>
                        Secure wallet transfer for user transactions
                    </li>
                    <li>
                        Chinese language support
                    </li>
                </ul>
            </div>
        );
    }
}

export default Features;
