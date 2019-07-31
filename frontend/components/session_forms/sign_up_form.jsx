// "Welcome to OpenStable!"
// First Name *
// Last Name *
// Enter email *
// Enter password *
// Re-enter password *
        // when passwords differ they get outlined in red border and red font
            // not terribly dark red
// Primary riding location
// By creating an account you agree to the OpenStable Terms of Use and Privacy Policy
// Create Account Button

// Total 460px width, 640px height

import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { turnOffModal } from '../../actions/modal_actions';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            password: '',
            password2: '',
            riding_location: null
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const signup_params = Object.assign({}, this.state);
        this.props.submitForm(signup_params).then(
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
                <h1 className='session-form-heading'>Welcome to OpenStable!</h1>
                <hr />
                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.update('first_name')}></input>
                    <input type="text" onChange={this.update('last_name')}></input>
                    <input type="text" onChange={this.update('email')}></input>
                    <input type="text" onChange={this.update('password')}></input>
                    <input type="text" onChange={this.update('password2')}></input>
                    <select onChange={this.update('riding_location')}>
                        <option selected={true} disabled="disabled">Primary Riding Location *</option>
                        <option value="1">Northeastern United States</option>
                        <option value="2">Southeastern United States</option>
                        <option value="3">Midwestern United States</option>
                        <option value="4">Southwestern United States</option>
                        <option value="5">Western United States</option>
                        <option value="0">Other</option>
                    </select>
                    <button type="submit">Create Account</button>
                </form>
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
        submitForm: new_user_params => dispatch(signup(new_user_params)),
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);