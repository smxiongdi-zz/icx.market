import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className = "footer">
                <div className="row">
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/about'}}>about icx.market</NavLink></div>
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/features'}}>upcoming features</NavLink></div>
                    <div className="col-md-4">support@icx.market</div>
                </div>
            </div>
        )
    }
}

export default Footer;
