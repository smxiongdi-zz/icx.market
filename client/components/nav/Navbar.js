import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
            super();
            this.state = {
                Logout: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/logout'}} onClick={ this.handleLogout }>Logout</NavLink></div></li>,
                Notifications: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/notifications'}}>Notifications</NavLink></div></li>,
                Login: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/login'}}>Login</NavLink></div></li>,
                Register: <li className='nav-item'><div className='nav-link'><NavLink exact activeClassName='active' to = {{pathname: '/register'}}>Register</NavLink></div></li>,
                Profile: <li className="nav-item"> <div className="nav-link"><NavLink exact activeClassName="active" to = {{pathname: '/p'}} >Profile</NavLink></div> </li>
            }
            this.handleLogout = this.handleLogout.bind(this);
        }

    handleLogout (evt) {
            //this.props.setLoggedOut()
                //.then(() => this.setState({ redirectTo: '/' }))
        }



    render () {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md">
                    <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            <a className="navbar-brand" href="#">
                <div className="t1 color-title">nem</div>
                <div className="tdot color-title">.</div>
                <div className="t2 color-title">dir</div>
                <div className="t3 color-title">ect</div>
            </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="nav-link" href="#"><NavLink exact activeClassName="active" to = '/'>Home</NavLink><span className="sr-only">(current)</span></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" href="#"><NavLink exact activeClassName="active" to = {{pathname: '/c'}} >Community</NavLink></div>
                            </li>
                            { this.props.username ? this.state.Profile : '' }
                        </ul>
                        <ul className="navbar-nav">
                            { this.props.username ? this.state.Logout : this.state.Login }
                            { !this.props.username ? this.state.Register : '' }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
