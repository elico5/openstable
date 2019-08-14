import React from 'react';
import regionIdToString from '../../util/render/region_id_to_string';
import { fetchRegionStableCounts } from '../../util/api/stable_api';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FeaturedRegions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.regionCounts = {};
        this.setRegionCounts = this.setRegionCounts.bind(this);
        this.redirectToSearch = this.redirectToSearch.bind(this);
    }

    setRegionCounts(regionCountObject) {
        this.regionCounts = regionCountObject;
        this.setState({ loaded: true});
    }

    componentDidMount() {
        fetchRegionStableCounts().then(
            response => this.setRegionCounts(response.regions)
        );
    }

    redirectToSearch(id) {
        const now = new Date();
        const YYYY = now.getFullYear();
        const MM = String(now.getMonth() + 1).padStart(2, '0');
        const DD = String(now.getDate() + 1).padStart(2, '0');
        const today = [YYYY, MM, DD].join("-");
        const time = '12:00';
        const partySize = 1;
        this.props.history.push(`/search/region=${id}+date=${today}+time=${time}+partysize=${partySize}`);
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className='featured-regions-outer-container'>
                    <h1>Featured Regions</h1>
                    <div className='aspect-container'>
                        <div className='featured-regions-inner-container'>
                            <div className='feature-img-container' onClick={() => this.redirectToSearch(1)}>
                                <img src={window.featureNEURL} />
                                <div className='featured-region-div'>
                                    <div className='featured-region-label'>{regionIdToString(1)}</div>
                                    <div className='featured-region-count'>{this.regionCounts[1]} {this.regionCounts[1] > 1 ? 'stables' : 'stable'}</div>
                                </div>
                            </div>
                            <div className='feature-img-container' onClick={() => this.redirectToSearch(2)}>
                                <img src={window.featureSEURL} />
                                <div className='featured-region-div'>
                                    <div className='featured-region-label'>{regionIdToString(2)}</div>
                                    <div className='featured-region-count'>{this.regionCounts[2]} {this.regionCounts[2] > 1 ? 'stables' : 'stable'}</div>
                                </div>
                            </div>
                            <div className='feature-img-container' onClick={() => this.redirectToSearch(4)}>
                                <img src={window.featureSURL} />
                                <div className='featured-region-div'>
                                    <div className='featured-region-label'>{regionIdToString(4)}</div>
                                    <div className='featured-region-count'>{this.regionCounts[4]} {this.regionCounts[4] > 1 ? 'stables' : 'stable'}</div>
                                </div>
                            </div>
                            <div className='feature-img-container' onClick={() => this.redirectToSearch(3)}>
                                <img src={window.featureMWURL} />
                                <div className='featured-region-div'>
                                    <div className='featured-region-label'>{regionIdToString(3)}</div>
                                    <div className='featured-region-count'>{this.regionCounts[3]} {this.regionCounts[3] > 1 ? 'stables' : 'stable'}</div>
                                </div>
                            </div>
                            <div className='feature-img-container' onClick={() => this.redirectToSearch(5)}>
                                <img src={window.featureWURL} />
                                <div className='featured-region-div'>
                                    <div className='featured-region-label'>{regionIdToString(5)}</div>
                                    <div className='featured-region-count'>{this.regionCounts[5]} {this.regionCounts[5] > 1 ? 'stables' : 'stable'}</div>
                                </div>
                            </div>
                            <div className='feature-img-container' onClick={() => this.redirectToSearch(0)}>
                                <img src={window.featureOURL} />
                                <div className='featured-region-div'>
                                    <div className='featured-region-label'>{regionIdToString(0)}</div>
                                    <div className='featured-region-count'>{this.regionCounts[0]} {this.regionCounts[0] > 1 ? 'stables' : 'stable'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, { history }) => {
    return {
        history
    };
};

export default withRouter(connect(mapStateToProps)(FeaturedRegions));