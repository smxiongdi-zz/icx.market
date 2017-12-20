// import libraries
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles here, put static files here later
import styles from './static/css/app.css';

// import components here
import Footer from './components/nav/Footer.js';
import AboutContainer from './components/about/AboutContainer.js';
import FeaturesContainer from './components/features/FeaturesContainer.js';
import NavbarContainer from './components/nav/NavbarContainer.js';
import LoginContainer from './components/account/login/LoginContainer.js';
import LogoutContainer from './components/account/logout/LogoutContainer.js';
import RegisterContainer from './components/account/register/RegisterContainer.js';
import ConfirmContainer from './components/account/confirm_account/ConfirmContainer.js';


class App extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        // onload actions
        this.props.fetchSession();
    }

    render() {
        return (
            <div className = "NemDirectApp">
                <Router>
                    <div>
                        <NavbarContainer />
                        <div className = "cond_content">
                            <Switch>
                                {/*}<Route path = "/" component = { HomeContainer } />*/}
                                <Route exact path = "/about" component = { AboutContainer } />
                                <Route exact path = "/features" component = { FeaturesContainer } />
                                <Route exact path = "/login" component = { LoginContainer } />
                                <Route exact path = "/logout" component = { LogoutContainer } />
                                <Route exact path = "/register" component = { RegisterContainer } />
                                <Route path = "/confirm/:user_id" component = { ConfirmContainer } />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    };
}

export default App;
