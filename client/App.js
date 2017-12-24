// import libraries
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import styles here, put static files here later
//import styles from './static/css/app.css';

// import components here
import NavbarContainer from './components/nav/NavbarContainer.js';
import Footer from './components/footer/FooterContainer.js';
import DashContainer from './components/dash/DashContainer.js';
import AboutContainer from './components/about/AboutContainer.js';
import FeaturesContainer from './components/features/FeaturesContainer.js';
import LoginContainer from './components/account/login/LoginContainer.js';
import LogoutContainer from './components/account/logout/LogoutContainer.js';
import RegisterContainer from './components/account/register/RegisterContainer.js';
import ConfirmContainer from './components/account/confirm_account/ConfirmContainer.js';
import EditContainer from './components/edit_profile/EditContainer.js';
import SearchContainer from './components/search/SearchContainer.js';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            cssLoaded: false,
            profileLoaded: false,
            ICXInfoLoaded: false,
        }
    }

    componentDidMount() {
        // onload actions
        require('./static/css/loader.css');

        this.props.fetchSession().then(() => {
            if(this.props.theme === 'Light') {
                require('./static/css/light.css');
            } else if(this.props.theme === 'Dark') {
                require('./static/css/dark.css');
            }
            this.setState({cssLoaded:true});
        });

        this.props.fetchProfile().then(() => {
            this.setState({profileLoaded: true});
        });

        /*
        this.props.fetchICXInfo().then(() => {
            this.setState({ICXInfoLoaded: true});
        });
        */
    }

    componentWillMount() {}

    render() {
        if(!this.state.cssLoaded || !this.state.profileLoaded) {
            return (
                <div className = "load_wrapper">
                    <div className = "loading" />
                </div>
            );
        } else {
            return (
                <div className = "NemDirectApp">
                    <Router>
                        <div>
                            <NavbarContainer />
                            <div className = "wrapper">
                            <div className = "cond_content">
                                <Switch>
                                    <Route exact path = "/" component = { SearchContainer } />
                                    <Route exact path = "/dash" component = { DashContainer } />
                                    <Route exact path = "/about" component = { AboutContainer } />
                                    <Route exact path = "/features" component = { FeaturesContainer } />
                                    <Route exact path = "/login" component = { LoginContainer } />
                                    <Route exact path = "/logout" component = { LogoutContainer } />
                                    <Route exact path = "/register" component = { RegisterContainer } />
                                    <Route exact path = "/edit" component = { EditContainer } />
                                    <Route exact path = "/search" component = { SearchContainer } />
                                    <Route path = "/confirm/:user_id" component = { ConfirmContainer } />
                                </Switch>
                            </div>
                            </div>
                            <Footer />
                        </div>
                    </Router>
                </div>
            );
        }
    };
}

export default App;
