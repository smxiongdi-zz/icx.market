import React from 'react';
import { Router } from 'react-router-dom';
import styles from './../../static/css/loader.css';

class Loader extends React.Component {

    componentDidMount() {
        this.props.fetchSession();
    }

    render() {
        return (
            <div className="container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        );
    }
}

export default Loader;
