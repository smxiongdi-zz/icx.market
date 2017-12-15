import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className = "footer">
                <div className="row">
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/about'}}>About nem.direct</NavLink></div>
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/features'}}>Upcoming features</NavLink></div>
                    <div className="col-md-4">Questions? Contact support@nem.direct</div>
                </div>
            </div>
        )
    }
}

export default Footer;
