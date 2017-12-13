// import libraries
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles here, put static files here later
import styles from './css/app.css';

// import components here
import NavbarContainer from './components/nav/NavbarContainer.js';
import Footer from './components/nav/Footer.js';


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
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>
                        <div className="blah">Content in app.js</div>

                        <div className = "cond_content">
                            <Switch>
                                {/*}<Route path = "/" component = { HomeContainer } />*/}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    };
}

export default App;
