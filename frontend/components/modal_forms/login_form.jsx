import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { SIGN_UP_FORM_FLAG, turnOnModal, turnOffModal } from '../../actions/modal_actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.submitForm = this.submitForm.bind(this);
        this.submitDemoUser = this.submitDemoUser.bind(this);
        this.animateLogin = this.animateLogin.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const login_params = Object.assign({}, this.state);
        this.props.submitForm(login_params).then(
            () => this.props.turnOffModal()
        );
    }

    animateLogin() {
        const email_letters = 'demouser@openstable.com'.split('');
        const password_letters = 'demouser'.split('');
        const email_input = document.getElementById('email');
        const password_input = document.getElementById('password');
        let email = "";
        let password = "";
        email_input.value = "";
        password_input.value = "";
        const intervalId = setInterval(() => {
            if (email_letters.length > 0) {
                email += email_letters.shift();
                email_input.value = email;
            } else if (password_letters.length > 0) {
                password += password_letters.shift();
                password_input.value = password;
            } else {
                clearInterval(intervalId);
                this.submitDemoUser();
            }
        }, 60);
    }

    submitDemoUser() {
        const demo_user_params = {email: 'demouser@openstable.com', password: 'demouser'};
        this.props.submitForm(demo_user_params).then(
            () => this.props.turnOffModal()
        );
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        const errors = this.props.errors.map((error, i) => {
            return (
                <li className='error-item' key={i}>{error}</li>
            );
        });
        return (
            <div className='session-form-wrapper'>
                <div className='session-form'>
                    <h1 className='session-form-heading'>Please sign in</h1>
                    <ul className='error-list'>
                        {errors}
                    </ul>
                    <form onSubmit={this.submitForm}>
                        <input id='email'
                            type="text"
                            onChange={this.update('email')}
                            placeholder="Email"></input>
                        <input id='password'
                            type="password"
                            onChange={this.update('password')}
                            placeholder="Password"></input>
                        <button type="submit">Sign In</button>
                    </form>
                    <p>Don't want to complete the form?</p>
                    <button className='demo-button'
                        onClick={this.animateLogin}>Try Demo Account</button>
                    <div className='hr'></div>
                    <p>
                        New to OpenStable? 
                        <span className='modal-link' onClick={() => this.props.turnOnModal(SIGN_UP_FORM_FLAG)}>
                            Create an account
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: user_params => dispatch(login(user_params)),
        turnOffModal: () => dispatch(turnOffModal()),
        turnOnModal: flag => dispatch(turnOnModal(flag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);