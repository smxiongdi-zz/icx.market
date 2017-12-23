import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
            super();
            this.state = {
                Logout: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/logout'}} onClick={ this.handleLogout }>Logout</NavLink></div></li>,
                Notifications: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/notifications'}}>Notifications</NavLink></div></li>,
                Login: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/login'}}>login</NavLink></div></li>,
                Register: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/register'}}>Register</NavLink></div></li>,
                Profile: <li className="nav-item"> <div className="nav-link"><NavLink exact activeClassName="active" to = {{pathname: '/dash'}} >Dashboard</NavLink></div> </li>
            }
            this.handleLogout = this.handleLogout.bind(this);
        }

    handleLogout (evt) {
            //this.props.setLoggedOut()
                //.then(() => this.setState({ redirectTo: '/' }))
        }



    render () {
        return (
            <div className = "nav_scope">
                <nav className="navbar navbar-toggleable-md">
                    <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            <a className="navbar-brand">
                <div className = "color-title">
                    icx.market <small>BETA</small>
                </div>
            </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="nav-link" href="#"><NavLink exact activeClassName="active" to = {{pathname: '/c'}} >Community</NavLink></div>
                            </li>
                            { this.props.uname ? this.state.Profile : '' }
                        </ul>
                        <ul className="navbar-nav">
                            { !this.props.uname ? this.state.Register : '' }
                            { this.props.uname ? this.state.Logout : this.state.Login }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
