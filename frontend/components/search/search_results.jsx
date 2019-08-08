import React from 'react';
import SearchResultItem from './search_result_item';
import { connect } from 'react-redux';

const SearchResults = ({ stables, slots, search }) => {
    const area = 'the Northeastern United States';
    if (stables.constructor === Object && Object.entries(stables).length === 0) {
        return (
            <div className='no-results-container'>
                Sorry partner, looks like none of our stables in {area} have openings that accommodate that search request.
            </div>
        );
    } else {
        const searchResultItems = Object.values(stables).map((stable, i) => {
            return <SearchResultItem key={i} stable={stable} slots={slots[stable.id]} />;
        });
        return (
            <div className='search-results-container'>
                {searchResultItems}
            </div>
        );
    }
};

const mapStateToProps = ({ entities, ui }) => {
    return {
        stables: entities.stables,
        slots: entities.slots,
        search: ui.search
    };
};

export default connect(mapStateToProps)(SearchResults);