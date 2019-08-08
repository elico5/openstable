import React from 'react';
import { getRegionOptions } from '../../util/search/generate_form_params';
import { changeRegion } from '../../actions/session_actions';
import { turnOffModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class RegionChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { region: this.props.region };
        this.submitRegionChange = this.submitRegionChange.bind(this);
    }

    submitRegionChange() {
        this.props.changeRegion(parseInt(this.state.region));
        this.props.turnOffModal();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        const regionOptions = getRegionOptions();
        return (
            <div className='region-change-form-container'>
                <div className='region-change-select-container'>
                    <select
                        value={this.state.region}
                        id='region-change-select'
                        onChange={this.update('region')}>
                        {regionOptions}
                    </select>
                </div>
                <div className='region-change-button-container'>
                    <button onClick={this.submitRegionChange} className='region-change-button'>Change Region</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ session }) => {
    return {
        region: String(session.region)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeRegion: regionId => dispatch(changeRegion(regionId)),
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegionChangeForm);