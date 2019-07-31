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
            riding_location: ""
        };
        this.validity = {
            first_name: false,
            last_name: false,
            email: false,
            password: false,
            password2: false,
            riding_location: false
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        if (this.validity["riding_location"] === false) {
            e.currentTarget.querySelector('select').classList.add('invalid');
        } else if (!Object.values(this.validity).includes(false)) {
            const signup_params = Object.assign({}, this.state);
            this.props.submitForm(signup_params).then(
                () => this.props.turnOffModal()
            );
        }
    }

    update(field) {
        return e => {
            const value = e.target.value;
            this.setState({[field]: value});
            switch(field) {
                case "first_name":
                    if (value === "") {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
                    break;
                case "last_name":
                    if (value === "") {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
                    break;
                case "email":
                    const email_letters = value.split('');
                    if (!email_letters.includes('.') || !email_letters.includes('@')) {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
                    break;
                case "password":
                    if (value.length < 6) {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
                    break;
                case "password2":
                    if (value !== this.state.password || value.length < 6) {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
                    break;
                case "riding_location":
                    if (value === "") {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
            }
        }
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
                    <h1 className='session-form-heading'>Welcome to OpenStable!</h1>
                    <hr />
                    <ul className='error-list'>
                        {errors}
                    </ul>
                    <form onSubmit={this.submitForm}>
                        <input type="text"
                            onChange={this.update('first_name').bind(this)}
                            placeholder='First Name *'></input>
                        <input type="text"
                            onChange={this.update('last_name')}
                            placeholder='Last Name *'></input>
                        <input type="text"
                            onChange={this.update('email')}
                            placeholder='Enter Email *'></input>
                        <input type="password"
                            onChange={this.update('password')}
                            placeholder='Enter Password *'></input>
                        <input type="password"
                            onChange={this.update('password2')}
                            placeholder='Re-Enter Password *'></input>
                        <select value={this.state.riding_location} onChange={this.update('riding_location')}>
                            <option value="" disabled={true}>Primary Riding Location *</option>
                            <option value="1">Northeastern United States</option>
                            <option value="2">Southeastern United States</option>
                            <option value="3">Midwestern United States</option>
                            <option value="4">Southwestern United States</option>
                            <option value="5">Western United States</option>
                            <option value="0">Other</option>
                        </select>
                        <button type="submit">Create Account</button>
                    </form>
                    <hr />
                    <p>
                        By creating an account you agree to the
                        <span className='modal-link'>
                            OpenStable Terms of Use
                        </span>
                        <span> and</span>
                        <span className='modal-link'>
                            Privacy Policy
                        </span>
                        .
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
        submitForm: new_user_params => dispatch(signup(new_user_params)),
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);