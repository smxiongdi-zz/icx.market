import React from 'react';
import { Router } from 'react-router-dom';
// import { } from '../.././redux/actions/actions';

class About extends React.Component {

    componentDidMount() { }

    render() {
        return (
            <div className = "ptext">
                <h1 className="display-4">{this.props.pageTitle}</h1>
                <p>Our objective is to bring together the budding ICX token holder community. We wish to enable our users to engage in transactions in the most secure, fast way possible.</p>
                <p>icx.market is developed by icon enthusiasts currently based in Taipei. We will have a chinese version of the site out once main features are completed.</p>
            </div>
        );
    }
}

export default About;
