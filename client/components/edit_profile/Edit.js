import React from 'react';
import { Router } from 'react-router-dom';
import InputsContainer from './inputs/InputsContainer.js';

class Edit extends React.Component {

    constructor() {
        super();

        this.state = {
        }
    }

    componentDidMount() {
        !this.state.uname ? this.props.history.push("/login") : ''
    }

    render() {
        return (
            <div className = "ptext">
                <InputsContainer />
            </div>
        );
    }
}

export default Edit;
