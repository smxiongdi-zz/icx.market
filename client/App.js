// import libraries
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles here, put static files here later
import styles from './css/app.css';

// import components here
import Footer from './components/nav/Footer.js';
import NavbarContainer from './components/nav/NavbarContainer.js';
import RegisterContainer from './components/register/RegisterContainer.js';


class App extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        // onload actions
    }

    render() {
        return (
            <div className = "NemDirectApp">
                <Router>
                    <div className = "preload_content">
                        <NavbarContainer />
                        <Footer />

                        <div className = "cond_content">
                            <Switch>
                                {/*}<Route path = "/" component = { HomeContainer } />*/}
                                <Route exact path = "/register" component = { RegisterContainer } />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    };
}

export default App;
