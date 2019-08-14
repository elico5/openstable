import React from 'react';
import { changeUserInfo } from '../../../actions/user_actions';
import { connect } from 'react-redux';

class UserInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.firstName,
            last_name: this.props.lastName,
            email: this.props.email,
            phone_number: this.props.phoneNumber,
            riding_location: String(this.props.ridingLocation)
        };
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.changeUserInfo(
            this.props.currentUserId,
            this.state.email,
            this.state.first_name,
            this.state.last_name,
            this.state.phone_number,
            this.state.riding_location).then(
                () => document.getElementById('user-info-success-message').style.display = 'block'
            );
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    render() {
        const error_messages = this.props.errors.map((error, i) => {
            return <div className='user-error-message' key={i}>{error}</div>;
        });
        return (
            <>
                <span className='user-info-form-heading'>Profile</span>
                <span className='user-info-link-text'>Privacy Policy</span>
                <div id='user-info-success-message'>Profile information changes saved successfully</div>
                {error_messages}
                <div className='first-last-form-container'>
                    <div className='user-info-first'>
                        <div className='user-info-form-label'>FIRST NAME</div>
                        <input
                            onChange={this.update('first_name')}
                            value={this.state.first_name}
                            type='text'></input>
                    </div>
                    <div className='user-info-last'>
                        <div className='user-info-form-label'>LAST NAME</div>
                        <input
                            onChange={this.update('last_name')}
                            value={this.state.last_name}
                            type='text'></input>
                    </div>
                </div>
                <div className='user-info-other-container'>
                    <div className='user-info-form-label'>EMAIL</div>
                    <input 
                        onChange={this.update('email')}
                        value={this.state.email}
                        type='text'></input>
                </div>
                <div className='user-info-other-container'>
                    <div className='user-info-form-label'>PHONE</div>
                    <input
                        onChange={this.update('phone_number')}
                        value={this.state.phone_number}
                        type='text'></input>
                </div>
                <div className='user-info-other-container'>
                    <div className='user-info-form-label'>PRIMARY RIDING LOCATION</div>
                    <select value={this.state.riding_location} onChange={this.update('riding_location')}>
                        <option value="1">Northeastern United States</option>
                        <option value="2">Southeastern United States</option>
                        <option value="3">Midwestern United States</option>
                        <option value="4">Southwestern United States</option>
                        <option value="5">Western United States</option>
                        <option value="0">Other</option>
                    </select>
                </div>
                <button onClick={this.submit} className='user-info-form-submit'>Save Changes</button>
                <div className='user-info-form-hr'></div>
            </>
        );
    }
}

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeUserInfo: (userId, email, firstName, lastName, phoneNumber, ridingLocation) => dispatch(changeUserInfo(userId, email, firstName, lastName, phoneNumber, ridingLocation))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);