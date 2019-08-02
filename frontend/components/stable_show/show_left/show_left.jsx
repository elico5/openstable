import React from 'react';
import Overview from './overview';
import Reviews from './reviews';

class ShowLeft extends React.Component {
    constructor(props) {
        super(props);
        this.overviewRef = React.createRef();
        this.reviewsRef = React.createRef();
        this.scrollToOverview = this.scrollToOverview.bind(this);
        this.scrollToReviews = this.scrollToOverview.bind(this);
    }

    scrollToOverview() {
        this.overviewRef.current.scrollIntoView({ behavior: "smooth" });
    }

    scrollToReviews() {
        this.reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className='show-left-container'>
                <div className='show-nav'>
                    <div className='show-nav-button' onClick={this.scrollToOverview}>
                        <span>Overview</span>
                    </div>
                    <div className='show-nav-button' onClick={this.scrollToReviews}>
                        <span>Reviews</span>
                    </div>
                </div>
                <div className='overview-container' ref={this.overviewRef}>
                    <Overview name={this.props.name}
                        description={this.props.description} />
                </div>
                <div className='reviews-container' ref={this.reviewsRef}>
                    <Reviews />
                </div>
            </div>
        );
    }
}

export default ShowLeft;