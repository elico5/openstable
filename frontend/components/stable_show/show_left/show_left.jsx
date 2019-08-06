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
        this.overviewRef.current.scrollIntoView(true, { behavior: "smooth" });
    }

    scrollToReviews() {
        this.reviewsRef.current.scrollIntoView(true, { behavior: "smooth" });
    }

    render() {
        return (
            <div className='show-left-container'>
                <div id='show-nav' className='show-nav'>
                    <div className='show-nav-button' onClick={this.scrollToOverview}>
                        <span>Overview</span>
                    </div>
                    <div className='show-nav-button' onClick={this.scrollToReviews}>
                        <span>Reviews</span>
                    </div>
                </div>
                <div className='overview-container' ref={this.overviewRef}>
                    <Overview name={this.props.name}
                        description={this.props.description}
                        overallRating={this.props.overallRating}
                        reviewCount={this.props.reviewCount}
                        price={this.props.price} />
                </div>
                <div className='reviews-container' ref={this.reviewsRef}>
                    <Reviews reviewCount={this.props.reviewCount}
                        overallRating={this.props.overallRating}
                        serviceRating={this.props.serviceRating}
                        cleanlinessRating={this.props.serviceRating}
                        valueRating={this.props.valueRating}
                        reviews={this.props.reviews}
                        users={this.props.users} />
                </div>
            </div>
        );
    }
}

export default ShowLeft;