import React from 'react';
import { changeUserPassword } from '../../../util/api/user_api';

class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            password2: ''
        };
        this.validity = {
            password: false,
            password2: false
        }
        this.submit = this.submit.bind(this);
    }

    changeSuccessDisplays() {
        document.getElementById('password-error-message').style.display = 'none';
        document.getElementById('demo-password-error-message').style.display = 'none';
        document.getElementById('password-success-message').style.display = 'block';
    }

    changeDemoDisplays() {
        document.getElementById('password-error-message').style.display = 'none';
        document.getElementById('demo-password-error-message').style.display = 'block';
        document.getElementById('password-success-message').style.display = 'none';
    }

    submit() {
        if (Object.values(this.validity).includes(false)) {
            document.getElementById('password-error-message').style.display = 'block';
            document.getElementById('password-success-message').style.display = 'none';
            document.getElementById('demo-password-error-message').style.display = 'none';
        } else {
            changeUserPassword(this.props.currentUserId, this.state.password).then(
                () => this.changeSuccessDisplays(),
                () => this.changeDemoDisplays()
            );
        }
    }

    update(field) {
        return e => {
            const value = e.target.value;
            this.setState({[field]: value});
            switch(field) {
                case 'password':
                    if (value.length < 6) {
                        this.validity[field] = false;
                        e.target.classList.add('invalid');
                    } else {
                        this.validity[field] = true;
                        e.target.classList.remove('invalid');
                    }
                    break;
                case 'password2':
                    if (value !== this.state.password || value.length < 6) {
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
        return (
            <>
                <span className='user-info-form-heading'>Change Password</span>
                <div className='password-explanation'>Please choose a password that is at least 6 characters long (optional).</div>
                <div id='password-success-message'>Password change saved successfully</div>
                <div id='demo-password-error-message'>You cannot alter the Demo User account information!</div>
                <div id='password-error-message'>Passwords must match and be at least 6 characters!</div>
                <div className='user-info-other-container'>
                    <div className='user-info-form-label'>NEW PASSWORD</div>
                    <input
                        onChange={this.update('password')}
                        value={this.state.password}
                        type='password'></input>
                </div>
                <div className='user-info-other-container'>
                    <div className='user-info-form-label'>CONFIRM NEW PASSWORD</div>
                    <input
                        onChange={this.update('password2')}
                        value={this.state.password2}
                        type='password'></input>
                </div>
                <button onClick={this.submit} className='user-info-form-submit'>Change Password</button>
            </>
        )
    }
}

export default PasswordChangeForm;