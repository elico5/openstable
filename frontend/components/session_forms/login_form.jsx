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
    }

    submitForm(e) {
        e.preventDefault();
        const login_params = Object.assign({}, this.state);
        this.props.submitForm(login_params).then(
            () => this.props.turnOffModal()
        );
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
                    <hr />
                    <ul className='error-list'>
                        {errors}
                    </ul>
                    <form onSubmit={this.submitForm}>
                        <input type="text"
                            onChange={this.update('email')}
                            placeholder="Email"></input>
                        <input type="password"
                            onChange={this.update('password')}
                            placeholder="Password"></input>
                        <button type="submit">Sign In</button>
                    </form>
                    <hr />
                    <p>
                        New to OpenStable? 
                        <span className='modal-link' onClick={() => this.props.turnOnModal(SIGN_UP_FORM_FLAG)}>
                            Create an account
                        </span>
                        <span className='or'> or </span>
                        <span className='modal-link' onClick={this.submitDemoUser}>
                            try a demo account
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