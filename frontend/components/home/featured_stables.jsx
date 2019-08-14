import React from 'react';
import { fetchHomepageStables } from '../../actions/stable_actions';
import { turnOnLoader, turnOffLoader } from '../../actions/loader_actions'
import regionIdToString from '../../util/render/region_id_to_string';
import FeaturedStableItem from './featured_stable_item';
import { connect } from 'react-redux';

class FeaturedStables extends React.Component {
    componentDidMount() {
        this.props.turnOnLoader();
        this.props.fetchHomepageStables(this.props.region).then(
            () => this.props.turnOffLoader()
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.region != this.props.region) {
            this.props.turnOnLoader();
            this.props.fetchHomepageStables(this.props.region).then(
                () => this.props.turnOffLoader()
            );
        }
    }

    render() {
        if (Object.keys(this.props.stables).length === 0) {
            return null;
        } else {
            const stableItems = Object.keys(this.props.stables).map(stableId => {
                return <FeaturedStableItem
                    stable={this.props.stables[stableId]}
                    key={stableId}/>;
            })
            return (
                <div className='featured-stables-outer-container'>
                    <h1>Popular stables in {regionIdToString(this.props.regionId)}</h1>
                    <div className='featured-stables-inner-container'>
                        {stableItems}
                    </div>
                </div>
            );
        }
    }

}

const mapStateToProps = ({ entities, session }) => {
    return {
        stables: entities.stables,
        region: session.region
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHomepageStables: regionId => dispatch(fetchHomepageStables(regionId)),
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStables);