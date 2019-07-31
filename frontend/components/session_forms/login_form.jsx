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
    }

    submitForm(e) {
        e.preventDefault();
        const login_params = Object.assign({}, this.state);
        this.props.submitForm(login_params).then(
            () => this.props.turnOffModal()
        );
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        return (
            <div className='session-form-wrapper'>
                <h1 className='session-form-heading'>Please sign in</h1>
                <hr />
                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.update('email')}></input>
                    <input type="text" onChange={this.update('password')}></input>
                    <button type="submit">Sign In</button>
                </form>
                <hr />
                <p>
                    New to OpenStable? 
                    <span className='modal-link' onClick={() => this.props.turnOnModal(SIGN_UP_FORM_FLAG)}>
                        Create an account
                    </span>
                </p>
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