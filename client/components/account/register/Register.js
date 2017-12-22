import React from 'react';
import Recaptcha from 'react-gcaptcha';

import { siteVerify, registerUser } from '../../.././redux/actions/actions';

class Register extends React.Component {

    constructor() {
        super();

        this.state = {
            inputEmail: '',
            inputPass: '',
            message: '',
            captcha: false,
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectPage = this.redirectPage.bind(this);
        this.handleRecaptcha = this.handleRecaptcha.bind(this);

    }

    componentDidMount () {
    }

    handleEmailChange (evt) {
        this.setState({inputEmail: evt.target.value});
    }

    handlePassChange (evt) {
        this.setState({inputPass: evt.target.value});
    }

    handleRecaptcha (recaptcha) {
        this.props.dispatch(siteVerify({recaptcha: recaptcha}));
    }

    handleSubmit (evt) {
        evt.preventDefault();

        if(this.state.inputEmail && this.state.inputPass.length >=4) {
            const newUser = {uname: this.state.inputEmail, upass: this.state.inputPass};
            this.props.recap ? this.props.dispatch(registerUser(newUser)) : '';
            // should redirect
        } else if(!this.state.inputEmail) {
            this.setState({message: 'Please enter e-mail'});
        } else { this.setState({message: 'Password too short'}) }
    }

    redirectPage () {
        setTimeout(() => this.props.history.push('/', 5000));
    }

    render () {
        let regMsg = <div>{this.props.message}</div>;
        let errMsg = <div className="error-message">{this.props.message}</div>;
        return (

            <div className="auth-page">
                { this.props.uname ? this.redirectPage : '' }
                <h2 className="display-4">{this.props.title}</h2>
                <form>
                        <div className="form-group inputfield">
                            <label htmlFor="inputEmail">E-mail</label>
                            <input type="email" className="form-control" id="inputEmail" onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                            <small id="emailHelp" className="form-text text-muted">
                                <div className="smtxt">Your e-mail is kept private. We don't sell your information.</div>
                            </small>
                        </div>

                        <div className="form-group inputfield">
                            <label htmlFor="inputPass">Password</label>
                            <input type="password" className="form-control" id="inputPass" onChange={this.handlePassChange} value={this.state.inputPass}/>
                            <small id="passHelp" className="form-text text-muted">
                                <div className="smtxt">Don't worry. We aren't storing your password in plaintext.</div>
                            </small>
                        </div>

                <Recaptcha
                    sitekey="6LeGAD0UAAAAAHxEorgSZxhlgHAeAOL2AWFJNn4c"
                    verifyCallback={this.handleRecaptcha}
                    theme="dark"
                />

                <div className="auth-button">
                    <button className="btn btn-outline-secondary btn-text" onClick={this.handleSubmit}>
                        Register
                    </button>
                </div>

            </form>

            { this.props.error==0 ?
                    regMsg :
                    errMsg
            }

        </div>

        )
    }
}

export default Register;
