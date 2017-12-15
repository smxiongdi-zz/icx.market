import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className = "footer">
                <p>support@nem.direct | nem.direct 2017</p>
                <p className="footer-link"><NavLink to = {{pathname: '/about'}}>About nem.direct</NavLink></p>
                <p className="footer-link"><NavLink to = {{pathname: '/features'}}>Upcoming features</NavLink></p>
            </div>
        )
    }
}

export default Footer;
