import React from 'react';
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../.././redux/actions/settings';

class Footer extends React.Component {

    constructor() {
        super();

        this.setTheme = this.setTheme.bind(this);
    }

    setTheme (evt) {
        console.log(evt.target.value);
        this.props.dispatch(themeSettings({theme:evt.target.value}))
            .then(() => {
                window.location.reload();
            });
    }

    render() {
        return (
            <div className = "footer">
                <div className="row">
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/about'}}>about icx.market</NavLink></div>
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/features'}}>upcoming features</NavLink></div>
                    <div className="col-md-4">support@icx.market</div>
                </div>
                <div className="row">
                    <div className="col-md-4 footer-link">terms | policy</div>
                    <div className="col-md-4 footer-link"><NavLink to = {{pathname: '/community'}}>Community</NavLink></div>
                    <div className="col-md-4">
                        <select className="smtext" onChange={this.setTheme}>
                            <option selected>Theme selection</option>
                            <option value="Light">Light theme</option>
                            <option value="Dark">Dark theme</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
