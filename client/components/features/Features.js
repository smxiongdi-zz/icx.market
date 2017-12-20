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
                        Community search features
                    </li>
                    <li>
                        Profile editing with features such as location
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
